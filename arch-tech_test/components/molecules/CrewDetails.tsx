"use client"

import Image from "next/image"
import { LaunchCard, Title } from "@/components"
import { Crew } from "@/types"
import { useEffect, useState } from "react"

const CrewDetails = ({ id }: { id: string }) => {
  const [crewDetails, setCrewDetails] = useState<Crew>()

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/crew/${id}`)
      const data = await res.json()
      setCrewDetails(data)
    }

    fetchData()
  }, [id])

  return (
    <>
      {crewDetails && (
        <div
          key={crewDetails.id}
          className="flex flex-wrap gap-x-8 gap-y-4 sm:justify-center"
        >
          <div className="bg-foreground text-background px-4 py-2">
            <Title className="mt-4">{crewDetails.name}</Title>
            <Title size="sm" className="mb-4">
              {crewDetails.agency}
            </Title>
            <Image
              alt="latest"
              src={crewDetails.image}
              width="200"
              height="0"
              className="w-full h-auto"
              priority
            />
          </div>
          {crewDetails.launches && crewDetails.launches.length > 0 && (
            <div>
              <Title>Missions</Title>
              {crewDetails.launches.map((launch) => (
                <LaunchCard key={launch.id} launch={launch} />
              ))}
            </div>
          )}
        </div>
      )}
    </>
  )
}

export default CrewDetails
