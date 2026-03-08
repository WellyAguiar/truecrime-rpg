"use client"

import { useState } from "react"
import {
  rollNormal,
  rollAdvantage,
  rollDisadvantage
} from "@/lib/dice"

export default function DiceButtons() {

  const [roll, setRoll] = useState<number | null>(null)
  const [result, setResult] = useState<string>("")

  function normal() {
    const data = rollNormal()
    setRoll(data.roll)
    setResult(data.result)
  }

  function advantage() {
    const data = rollAdvantage()
    setRoll(data.roll)
    setResult(data.result)
  }

  function disadvantage() {
    const data = rollDisadvantage()
    setRoll(data.roll)
    setResult(data.result)
  }

  return (
    <div className="space-y-4">

      <div className="flex gap-4">

        <button
          onClick={normal}
          className="bg-blue-600 px-4 py-2 rounded"
        >
          Normal
        </button>

        <button
          onClick={advantage}
          className="bg-green-600 px-4 py-2 rounded"
        >
          Vantagem
        </button>

        <button
          onClick={disadvantage}
          className="bg-red-600 px-4 py-2 rounded"
        >
          Desvantagem
        </button>

      </div>

      {roll !== null && (
        <div>

          <p>Dado: {roll}</p>
          <p>Resultado: {result}</p>

        </div>
      )}

    </div>
  )
}