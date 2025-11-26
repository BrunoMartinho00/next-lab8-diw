'use client'
import React, { useEffect, useState } from 'react'

export default function Contador() {
  const [count, setCount] = useState<number>(0)
  const [history, setHistory] = useState<number[]>([])

  // Helpers
  const saveToLocalStorage = (value: number, hist: number[]) => {
    try {
      localStorage.setItem('contador:value', String(value))
      localStorage.setItem('contador:history', JSON.stringify(hist))
    } catch (e) {
      // ignore localStorage errors in some environments
    }
  }

  // Load initial from localStorage
  useEffect(() => {
    try {
      const storedValue = localStorage.getItem('contador:value')
      const storedHistory = localStorage.getItem('contador:history')
      if (storedValue !== null) setCount(Number(storedValue))
      if (storedHistory) setHistory(JSON.parse(storedHistory) as number[])
    } catch (e) {
      // ignore
    }
  }, [])

  // update localStorage whenever count or history changes
  useEffect(() => {
    saveToLocalStorage(count, history)
  }, [count, history])

  const clamp = (n: number) => Math.max(0, Math.min(10, n))

  const pushHistory = (n: number) => setHistory(prev => [...prev, n])

  const increment = () => {
    setCount(prev => {
      const next = clamp(prev + 1)
      if (next !== prev) pushHistory(next)
      return next
    })
  }

  const decrement = () => {
    setCount(prev => {
      const next = clamp(prev - 1)
      if (next !== prev) pushHistory(next)
      return next
    })
  }

  const reset = () => {
    setCount(0)
    setHistory(prev => [...prev, 0])
  }

  const statusClass = () => {
    if (count <= 3) return 'text-red-600 bg-red-100'
    if (count <= 7) return 'text-yellow-600 bg-yellow-100'
    return 'text-green-700 bg-green-100'
  }

  return (
    <div className="max-w-lg mx-auto bg-white dark:bg-gray-800 p-6 rounded shadow">
      <h3 className="text-xl font-bold mb-4">Contador</h3>

      <div className="flex flex-col items-center gap-4">
        <div className={`text-4xl font-bold rounded-full w-28 h-28 flex items-center justify-center ${statusClass()}`}>
          {count}
        </div>

        <div className="flex gap-2">
          <button onClick={decrement} className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded">-</button>
          <button onClick={reset} className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded">Reset</button>
          <button onClick={increment} className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded">+</button>
        </div>

        <div className="w-full">
          <h4 className="font-semibold mb-2">Histórico</h4>
          <ul className="list-disc pl-5 max-h-40 overflow-auto">
            {history.length === 0 ? <li className="text-gray-500">Nenhum histórico ainda</li> : history.map((v, i) => <li key={i}>{v}</li>)}
          </ul>
        </div>
      </div>
    </div>
  )
}
