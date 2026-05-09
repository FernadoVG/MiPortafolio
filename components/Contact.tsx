"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./SubmitBtn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.45);

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="scroll-mt-28 py-18 sm:py-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <div className="surface-card rounded-[2rem] p-7 sm:p-10 lg:p-12">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-5">
            <p className="section-kicker">Contact</p>
            <SectionHeading>Let&apos;s build something useful.</SectionHeading>
            <p className="max-w-xl text-lg leading-8 text-[var(--muted)]">
              If you&apos;re exploring AI, automation, enterprise demos,
              product ideas, or a technically grounded web experience, I&apos;d
              be happy to connect.
            </p>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
              fer.vergaraguzman@gmail.com
            </p>
          </div>

          <form
            className="flex flex-col gap-3"
            action={async (formData) => {
              const { error } = await sendEmail(formData);

              if (error) {
                toast.error(error);
                return;
              }

              toast.success("Email sent successfully!");
            }}
          >
            <input
              className="rounded-[1.25rem] border border-[var(--line)] bg-[var(--card-strong)] px-5 py-4 text-base text-[var(--foreground)] outline-none placeholder:text-[var(--muted)] focus:border-[var(--accent)]"
              name="senderEmail"
              type="email"
              required
              maxLength={500}
              placeholder="Your email"
            />
            <textarea
              className="min-h-[14rem] rounded-[1.5rem] border border-[var(--line)] bg-[var(--card-strong)] p-5 text-base text-[var(--foreground)] outline-none placeholder:text-[var(--muted)] focus:border-[var(--accent)]"
              name="message"
              placeholder="Tell me what you're building or where you need support."
              required
              maxLength={5000}
            />
            <SubmitBtn />
          </form>
        </div>
      </div>
    </motion.section>
  );
}
