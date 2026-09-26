"use client";

import { useActionState, useEffect, useState } from "react";
import { submitRsvp, type RsvpState } from "./actions";

const NAME_KEY = "bbh-xmas:name";

export default function RsvpForm() {
  const [state, action, pending] = useActionState<RsvpState, FormData>(submitRsvp, {
    ok: false,
    message: "",
  });
  const [name, setName] = useState("");

  // Remember the visitor's name on this device so updating their answer is easy.
  useEffect(() => {
    try {
      setName(localStorage.getItem(NAME_KEY) ?? "");
    } catch {}
  }, []);
  useEffect(() => {
    if (state.ok && state.name) {
      try {
        localStorage.setItem(NAME_KEY, state.name);
      } catch {}
    }
  }, [state]);

  return (
    <form action={action} className="rsvp-form">
      <label>
        <span>Name</span>
        <input
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          maxLength={40}
          required
          autoComplete="given-name"
        />
      </label>

      <label>
        <span>
          Note <em className="muted">(optional)</em>
        </span>
        <textarea
          name="note"
          placeholder="e.g. arriving Saturday, bringing speakers, plus one…"
          maxLength={200}
          rows={2}
        />
      </label>

      <div className="rsvp-buttons">
        <button className="btn btn-primary" name="going" value="yes" disabled={pending}>
          🎄 Yes, I&apos;m going!
        </button>
        <button className="btn btn-ghost" name="going" value="no" disabled={pending}>
          Can&apos;t make it
        </button>
      </div>

      {state.message && (
        <p className={state.ok ? "form-msg ok" : "form-msg err"} role="status">
          {state.message}
        </p>
      )}
      <p className="muted small">Already answered? Submit again with the same name to change it.</p>
    </form>
  );
}
