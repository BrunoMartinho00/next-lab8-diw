'use client'
import React, { useEffect, useState } from 'react'

interface ContadorPersonalizadoProps {
  title: string
}

export default function ContadorPersonalizado({ title }: ContadorPersonalizadoProps) {
  const sanitizedKey = `contadorPersonalizado:${title}`
  const [likes, setLikes] = useState<number>(0)

  useEffect(() => {
    try {
      const stored = localStorage.getItem(sanitizedKey)
      if (stored !== null) setLikes(Number(stored))
    } catch (e) {
      // ignore
    }
  }, [sanitizedKey])

  useEffect(() => {
    try {
      localStorage.setItem(sanitizedKey, String(likes))
    } catch (e) {
      // ignore
    }
  }, [likes, sanitizedKey])

  const inc = () => setLikes(l => l + 1)

  return (
    <button onClick={inc} className="mt-2 px-3 py-1 bg-indigo-600 text-white rounded">
      👍 {likes}
    </button>
  )
}
