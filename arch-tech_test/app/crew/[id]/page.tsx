import { CrewDetails } from "@/components"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const id = (await params).id

  return {
    title: `SpaceX API - Crew - ${id}`,
  }
}

export default async function Crew({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  return (
    <div>
      <CrewDetails id={id} />
    </div>
  )
}
