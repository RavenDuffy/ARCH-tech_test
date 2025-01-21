"use client"

import { CrewCard } from "@/components"
import { Crew } from "@/types"
import { useEffect, useState } from "react"

const CrewDisplay = () => {
  const [crew, setCrew] = useState<Crew[]>()

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/crew")
      const data = await res.json()
      setCrew(data)
    }

    fetchData()
  }, [])

  return (
    <div className="flex flex-wrap gap-x-8 gap-y-4 justify-center">
      {crew &&
        crew.length > 0 &&
        crew.map((member) => <CrewCard key={member.id} crew={member} />)}
    </div>
  )
}

export default CrewDisplay
