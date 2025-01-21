import { Crew } from "@/types"
import { NextResponse } from "next/server"

export const dynamic = "force-static"

export async function GET() {
  const res = await fetch("https://api.spacexdata.com/v4/crew/query", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: {},
      options: {},
    }),
  })
  const data = await res.json()
  const dataParsed = data.docs.map((crew: Crew) => ({
    name: crew.name,
    agency: crew.agency,
    image: crew.image,
    launches: crew.launches.length,
    id: crew.id,
  }))

  return NextResponse.json(dataParsed, { status: 200 })
}
