import { promises as fs } from "fs";
import path from "path";
import { Redis } from "@upstash/redis";

export type Rsvp = {
  id: string; // lowercased name, so the same person re-submitting updates their answer
  name: string;
  going: boolean;
  note: string;
  at: string; // ISO timestamp of last update
};

const REDIS_KEY = "bbh-xmas:rsvps:v2";
const FILE = path.join(process.cwd(), "data", "rsvps.json");

// No setup needed. If the site runs on Vercel with the Upstash integration connected,
// Vercel injects these keys automatically (either naming style). Otherwise use a local file.
const redisUrl = process.env.KV_REST_API_URL ?? process.env.UPSTASH_REDIS_REST_URL;
const redisToken = process.env.KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN;
const redis = redisUrl && redisToken ? new Redis({ url: redisUrl, token: redisToken }) : null;

async function readFile(): Promise<Record<string, Rsvp>> {
  try {
    return JSON.parse(await fs.readFile(FILE, "utf8"));
  } catch {
    return {};
  }
}

export function rsvpId(name: string) {
  return name.trim().toLowerCase().replace(/\s+/g, " ");
}

export async function listRsvps(): Promise<Rsvp[]> {
  const all = redis
    ? Object.values((await redis.hgetall<Record<string, Rsvp>>(REDIS_KEY)) ?? {})
    : Object.values(await readFile());
  return all.sort((a, b) => a.at.localeCompare(b.at));
}

export async function saveRsvp(rsvp: Rsvp) {
  if (redis) {
    await redis.hset(REDIS_KEY, { [rsvp.id]: rsvp });
    return;
  }
  const data = await readFile();
  data[rsvp.id] = rsvp;
  await fs.mkdir(path.dirname(FILE), { recursive: true });
  await fs.writeFile(FILE, JSON.stringify(data, null, 2));
}
