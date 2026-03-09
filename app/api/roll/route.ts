import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function POST(req: Request) {

  const body = await req.json()

  let room = await prisma.room.findUnique({
    where: { code: body.roomId }
  })

  if (!room) {
    room = await prisma.room.create({
      data: { code: body.roomId }
    })
  }

  let player = await prisma.player.findFirst({
    where: {
      name: body.playerName,
      roomId: room.id
    }
  })

  if (!player) {
    player = await prisma.player.create({
      data:{
        name: body.playerName,
        character: body.character,
        hp: 10,
        roomId: room.id
      }
    })
  }

  const log = await prisma.roll.create({
    data:{
      value: body.roll,
      result: body.result,
      playerId: player.id,
      roomId: room.id
    }
  })

  return NextResponse.json(log)
}