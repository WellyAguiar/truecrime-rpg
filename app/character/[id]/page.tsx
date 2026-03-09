import { prisma } from "@/lib/prisma"
import { characters } from "@/data/characters"
import DiceButtons from "@/components/dice-buttons"

export default async function CharacterPage({
  params,
  searchParams
}: {
  params: Promise<{ id: string }>
  searchParams: Promise<{ room?: string }>
}) {

  const { id } = await params
  const { room } = await searchParams

  const character = characters.find(
    (character) => character.id === id
  )

  if (!character) {
    return <div className="p-10">Personagem não encontrado</div>
  }

  const roomCode = room ?? "default-room"

  const roomData = await prisma.room.findUnique({
    where: { code: roomCode }
  })

  const logs = roomData
    ? await prisma.roll.findMany({
        where: { roomId: roomData.id },
        include: { player: true },
        orderBy: { createdAt: "desc" },
        take: 20
      })
    : []

  return (
    <main className="p-10 space-y-6">

      <h1 className="text-3xl font-bold">
        {character.name}
      </h1>

      <p>Vida: {character.hp}</p>

      <DiceButtons
        character={character.id}
        roomId={roomCode}
        playerName="Welly"
      />

      <div className="mt-6">

        <h2 className="text-xl font-semibold mb-2">
          Histórico de Rolagens
        </h2>

        <ul className="space-y-1">
          {logs.map((log) => (
            <li key={log.id}>
              {log.player.name} ({log.player.character}) rolou {log.result} ({log.value})
            </li>
          ))}
        </ul>

      </div>

    </main>
  )
}