type DiceResult = {
  roll: number
  result: string
}

export function rollNormal(): DiceResult {
  const roll = Math.ceil(Math.random() * 6)

  if (roll <= 2) return { roll, result: "Falha" }
  if (roll <= 4) return { roll, result: "Sucesso parcial" }
  return { roll, result: "Sucesso" }
}

export function rollAdvantage(): DiceResult {
  const roll = Math.ceil(Math.random() * 6)

  if (roll === 1) return { roll, result: "Falha" }
  if (roll <= 3) return { roll, result: "Sucesso parcial" }
  return { roll, result: "Sucesso" }
}

export function rollDisadvantage(): DiceResult {
  const roll = Math.ceil(Math.random() * 6)

  if (roll <= 3) return { roll, result: "Falha" }
  if (roll <= 5) return { roll, result: "Sucesso parcial" }
  return { roll, result: "Sucesso" }
}