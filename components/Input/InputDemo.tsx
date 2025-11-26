'use client'
import React, { useEffect, useState } from 'react'

type Task = {
  id: string
  text: string
  category: string
}

const CATEGORIES = ['HTML', 'CSS', 'Tailwind CSS', 'JavaScript', 'TypeScript', 'React.js', 'Next.js']

export default function InputDemo() {
  const [typed, setTyped] = useState<string>('')
  const [selected, setSelected] = useState<string>(CATEGORIES[0])
  const [taskText, setTaskText] = useState<string>('')
  const [tasks, setTasks] = useState<Task[]>([])

  // Load / persist tasks & selection in localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('input:tasks')
      const savedSelected = localStorage.getItem('input:selected')
      const savedTyped = localStorage.getItem('input:typed')
      if (saved) setTasks(JSON.parse(saved))
      if (savedSelected) setSelected(savedSelected)
      if (savedTyped) setTyped(savedTyped)
    } catch (e) {
      // ignore
    }
  }, [])

  useEffect(() => {
    try {
      localStorage.setItem('input:tasks', JSON.stringify(tasks))
      localStorage.setItem('input:selected', selected)
      localStorage.setItem('input:typed', typed)
    } catch (e) {
      // ignore
    }
  }, [tasks, selected, typed])

  function addTask() {
    if (!taskText.trim()) return
    const newTask: Task = { id: `${Date.now()}-${Math.random()}`, text: taskText.trim(), category: selected }
    setTasks(prev => [newTask, ...prev])
    setTaskText('')
  }

  function removeTask(id: string) {
    setTasks(prev => prev.filter(t => t.id !== id))
  }

  function updateTask(id: string, newText: string) {
    setTasks(prev => prev.map(t => (t.id === id ? { ...t, text: newText } : t)))
  }

  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded shadow max-w-2xl mx-auto">
      <h3 className="text-xl font-semibold mb-4">Input Interactivo</h3>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Texto</label>
        <input value={typed} onChange={(e) => setTyped(e.target.value)} className="mt-1 block w-full p-2 border rounded" placeholder="Digite algo..." />
        <p className="mt-2 text-sm text-gray-500">Digitado: <span className="font-medium">{typed || '—'}</span></p>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Categoria / Tecnologia</label>
        <select value={selected} onChange={(e) => setSelected(e.target.value)} className="mt-1 block w-full p-2 border rounded">
          {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Nova Tarefa</label>
        <div className="flex gap-2 mt-1">
          <input value={taskText} onChange={e => setTaskText(e.target.value)} className="flex-1 p-2 border rounded" placeholder="Escreva tarefa..." />
          <button onClick={addTask} className="px-4 py-2 bg-blue-600 text-white rounded">Adicionar</button>
        </div>
      </div>

      <div>
        <h4 className="font-semibold mb-2">Lista de Tarefas</h4>
        <ul className="space-y-2">
          {tasks.length === 0 && <li className="text-gray-500">Nenhuma tarefa</li>}
          {tasks.map((t) => (
            <TaskItem key={t.id} task={t} onRemove={() => removeTask(t.id)} onUpdate={(newText) => updateTask(t.id, newText)} />
          ))}
        </ul>
      </div>
    </div>
  )
}

function TaskItem({ task, onRemove, onUpdate }: { task: Task; onRemove: () => void; onUpdate: (newText: string) => void }) {
  const [isEditing, setIsEditing] = useState(false)
  const [value, setValue] = useState(task.text)

  useEffect(() => setValue(task.text), [task.text])

  return (
    <li className="p-3 border rounded flex items-center justify-between">
      <div>
        <div className="text-sm font-medium">{task.category}</div>
        {isEditing ? (
          <input className="mt-1 p-1 border rounded w-full" value={value} onChange={e => setValue(e.target.value)} />
        ) : (
          <div className="text-sm text-gray-700">{task.text}</div>
        )}
      </div>

      <div className="flex gap-2 items-center">
        {isEditing ? (
          <>
            <button onClick={() => { onUpdate(value.trim()); setIsEditing(false) }} className="px-3 py-1 bg-green-600 text-white rounded">Salvar</button>
            <button onClick={() => { setValue(task.text); setIsEditing(false) }} className="px-3 py-1 bg-gray-200 rounded">Cancelar</button>
          </>
        ) : (
          <>
            <button onClick={() => setIsEditing(true)} className="px-3 py-1 bg-yellow-500 text-white rounded">Editar</button>
            <button onClick={onRemove} className="px-3 py-1 bg-red-600 text-white rounded">Apagar</button>
          </>
        )}
      </div>
    </li>
  )
}
