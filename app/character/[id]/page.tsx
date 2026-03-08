import { characters } from "@/data/characters"
import DiceButtons from "@/components/dice-buttons"

export default function CharacterPage({ params }: any) {

  const character = characters.find(
    (c) => c.id === params.id
  )

  if (!character) {
    return <div>Personagem não encontrado</div>
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