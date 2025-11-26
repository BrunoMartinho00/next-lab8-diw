'use client'
import React, { useEffect, useState } from 'react'

export default function Relogio() {
  // Do not initialize with a variable value during SSR to avoid hydration
  // mismatch. We'll set time only on the client via useEffect.
  const [time, setTime] = useState<string | null>(null)

  useEffect(() => {
    setTime(new Date().toLocaleTimeString())
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="text-sm text-gray-600 dark:text-gray-300">{time ?? ''}</div>
  )
}
