import { NextResponse } from "next/server"

export const dynamic = "force-static"

export async function GET() {
  const res = await fetch("https://api.spacexdata.com/v5/launches/latest", {
    headers: { "Content-Type": "application/json" },
  })
  const data = await res.json()
  const dataParsed = {
    name: data.name,
    date: data.date_utc,
    image: data.links.patch.small,
    id: data.id,
  }

  return NextResponse.json(dataParsed, { status: 200 })
}
