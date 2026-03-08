import Link from "next/link"
import { characters } from "@/data/characters"

export default function Home() {
  return (
    <main className="p-10">

      <h1 className="text-3xl font-bold mb-8">
        Escolha seu personagem
      </h1>

      <div className="grid grid-cols-2 gap-4">

        {characters.map((character) => (
          <Link
            key={character.id}
            href={`/character/${character.id}`}
            className="p-6 bg-zinc-800 rounded hover:bg-zinc-700"
          >
            <h2 className="text-xl">{character.name}</h2>
            <p>Vida: {character.hp}</p>
          </Link>
        ))}

      </div>

    </main>
  )
}