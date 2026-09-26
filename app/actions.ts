"use server";

import { revalidatePath } from "next/cache";
import { rsvpId, saveRsvp } from "@/lib/store";

export type RsvpState = { ok: boolean; message: string; name?: string };

export async function submitRsvp(_prev: RsvpState, form: FormData): Promise<RsvpState> {
  const name = String(form.get("name") ?? "").trim().slice(0, 40);
  const note = String(form.get("note") ?? "").trim().slice(0, 200);
  const answer = form.get("going");

  if (!name) return { ok: false, message: "Put your name first 😅" };
  if (answer !== "yes" && answer !== "no") return { ok: false, message: "Pick Yes or No." };

  const going = answer === "yes";
  await saveRsvp({ id: rsvpId(name), name, going, note, at: new Date().toISOString() });
  revalidatePath("/");
  return {
    ok: true,
    name,
    message: going ? `Let's gooo ${name}! 🍻 You're on the list.` : `Noted, ${name}. We'll miss you 🥲`,
  };
}
