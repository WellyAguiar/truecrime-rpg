"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { generateRoomCode } from "@/lib/room"

export default function Home() {

  const router = useRouter()
  const [roomInput, setRoomInput] = useState("")

  function createRoom() {
    const code = generateRoomCode()
    router.push(`/room/${code}`)
  }

  function joinRoom() {
    if (!roomInput) return
    router.push(`/room/${roomInput}`)
  }

  return (
    <main className="p-10 space-y-6">

      <h1 className="text-3xl font-bold">
        RPG Investigação
      </h1>

      <button
        onClick={createRoom}
        className="bg-green-600 px-4 py-2 rounded"
      >
        Criar sala
      </button>

      <div className="space-y-2">

        <input
          value={roomInput}
          onChange={(e) => setRoomInput(e.target.value)}
          placeholder="Código da sala"
          className="px-4 py-2 text-black rounded"
        />

        <button
          onClick={joinRoom}
          className="bg-blue-600 px-4 py-2 rounded"
        >
          Entrar
        </button>

      </div>

    </main>
  )
}