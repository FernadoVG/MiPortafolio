"use client";

import React from 'react'
import {motion} from "framer-motion"
import {links} from "@/lib/data"
import Link from 'next/link';

export default function header() {
  return (
    <header className="z-999 relative">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="
          fixed top-0 left-1/2 -translate-x-1/2
          h-[4.5rem] w-full
          rounded-none
          border border-white/40
          bg-white/80
          backdrop-blur
          shadow-black/[0.03]
          sm:top-6
          sm:h-[3.25rem]
          sm:w-[38rem]
          sm:rounded-full
        "
      >
        <nav className="h-full">
          <ul
            className="
              flex h-full w-full
              items-center justify-center
              gap-1
              px-2
              text-[0.9rem]
              font-medium
              text-gray-500
              sm:gap-5
            "
          >
            {links.map((link) => (
              <motion.li 
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              key={link.hash} 
              className="flex items-center h-full">
                <Link
                  href={link.hash}
                  className="
                    flex items-center justify-center
                    h-full
                    px-3
                    hover:text-gray-950
                  "
                >
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </header>
  )
}