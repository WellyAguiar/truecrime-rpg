import Link from "next/link"
import { characters } from "@/data/characters"

export default async function RoomPage({
  params
}: {
  params: Promise<{ roomId: string }>
}) {

  const { roomId } = await params

  return (
    <main className="p-10 space-y-8">

      <h1 className="text-3xl font-bold">
        Sala {roomId}
      </h1>

      <p>Escolha um personagem</p>

      <div className="grid grid-cols-2 gap-4">

        {characters.map((c) => (

          <Link
            key={c.id}
            href={`/character/${c.id}?room=${roomId}`}
            className="p-6 bg-zinc-800 rounded"
          >

            <h2>{c.name}</h2>
            <p>Vida: {c.hp}</p>

          </Link>

        ))}

      </div>

    </main>
  )
}