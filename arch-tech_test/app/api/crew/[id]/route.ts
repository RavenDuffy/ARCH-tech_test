import { Crew, Launch } from "@/types"
import { NextRequest, NextResponse } from "next/server"

export const dynamic = "force-static"

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params)?.id
  const res = await fetch("https://api.spacexdata.com/v4/crew/query", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: { _id: id },
      options: { populate: [{ path: "launches" }] },
    }),
  })
  if (res.status !== 200) {
    return NextResponse.json(
      { dataParsed: res.statusText },
      { status: res.status }
    )
  }
  const data = await res.json()
  const dataParsed = data.docs.map((crew: Crew) => ({
    id: crew.id,
    name: crew.name,
    agency: crew.agency,
    image: crew.image,
    launches: crew.launches.map((launch: Launch) => ({
      name: launch.name,
      id: launch.id,
      date: launch.date_utc,
      image: launch.links.patch?.small,
    })),
  }))

  return NextResponse.json(dataParsed[0], { status: 200 })
}
