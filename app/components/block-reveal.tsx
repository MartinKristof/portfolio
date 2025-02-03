"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import type React from "react" // Added import for React

export function BlockReveal({
  children,
  color = "bg-primary",
  delay = 0,
}: {
  children: React.ReactNode
  color?: string
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const scaleX = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 1])

  return (
    <motion.div
      ref={ref}
      className="relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay }}
    >
      <motion.div style={{ scaleX, opacity }} className={`${color} absolute inset-0 origin-left z-10`} />
      {children}
    </motion.div>
  )
}

