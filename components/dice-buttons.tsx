"use client"

import { useState } from "react"
import {
  rollNormal,
  rollAdvantage,
  rollDisadvantage
} from "@/lib/dice"

export default function DiceButtons() {

  const [rolling,setRolling] = useState(false)
  const [roll, setRoll] = useState<number | null>(null)
  const [result, setResult] = useState<string>("")

  function animateRoll(finalRoll: number, finalResult: string) {
    setRolling(true)
    let counter = 0

    const interval = setInterval(() => {
      setRoll(Math.ceil(Math.random() * 6))
      counter++

      if (counter >= 15) {
        clearInterval(interval)
        setRoll(finalRoll)
        setResult(finalResult)
        setRolling(false)
      }
    }, 100)
  }
  function normal() {
    const data = rollNormal()
    animateRoll(data.roll, data.result)
  }

  function advantage() {
    const data = rollAdvantage()
    animateRoll(data.roll, data.result)
  }

  function disadvantage() {
    const data = rollDisadvantage()
    animateRoll(data.roll, data.result)
  }

  return (
    <div className="space-y-4">

      <div className="flex gap-4">

        <button
          disabled={rolling}
          onClick={normal}
          className="bg-blue-600 px-4 py-2 rounded"
        >
          Normal
        </button>

        <button
          disabled={rolling}
          onClick={advantage}
          className="bg-green-600 px-4 py-2 rounded"
        >
          Vantagem
        </button>

        <button
          disabled={rolling}
          onClick={disadvantage}
          className="bg-red-600 px-4 py-2 rounded"
        >
          Desvantagem
        </button>

      </div>

      <div className="text-4xl font-bold">
        {roll ?? "-"}
      </div>

      {!rolling && result && (
        <p className="text-xl">{result}</p>
      )}
    </div>
  )
}