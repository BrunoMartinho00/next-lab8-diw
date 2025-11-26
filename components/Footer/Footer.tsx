'use client'
import React from 'react'
import Relogio from '@/components/Relogio/Relogio'

export default function Footer() {
  const data = new Date().getFullYear()
  return (
    <footer className="flex items-center gap-3">
      <span>DIW - ©{data}</span>
      <Relogio />
    </footer>
  )
}
