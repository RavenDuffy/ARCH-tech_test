import { CrewDisplay, Title } from "@/components"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "SpaceX API - Crew",
}

export default function Crew() {
  return (
    <>
      <Title size="lg" className="mb-4">
        Crew
      </Title>
      <CrewDisplay />
    </>
  )
}
