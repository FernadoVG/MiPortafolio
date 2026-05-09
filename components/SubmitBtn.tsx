import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { useFormStatus } from "react-dom";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="group inline-flex h-13 items-center justify-center gap-2 self-start rounded-full bg-[var(--foreground)] px-6 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--background)] disabled:cursor-not-allowed disabled:opacity-70"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-[var(--background)]" />
      ) : (
        <>
          Send message
          <FaPaperPlane className="text-xs opacity-80 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </>
      )}
    </button>
  );
}
