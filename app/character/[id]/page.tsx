import { characters } from "@/data/characters"
import DiceButtons from "@/components/dice-buttons"

export default async function CharacterPage({
  params
}: {
  params: Promise<{ id: string }>
}) {

  const { id } = await params
  const character = characters.find(
    (character) => character.id === id
  )

  if (!character) {
    return (
      <div className="p-10">
        Personagem não encontrado
      </div>
    )
  }

  return (
    <main className="p-10 space-y-6">

      <h1 className="text-3xl font-bold">
        {character.name}
      </h1>

      <p>Vida: {character.hp}</p>

      <DiceButtons />

    </main>
  )
}