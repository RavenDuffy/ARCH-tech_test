"use client"

import { Title, LaunchCard } from "@/components"
import { Launch } from "@/types"
import { useEffect, useState } from "react"

const Landing = () => {
  const [latestLaunch, setLatestLaunch] = useState<Launch>()

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/latest")
      const data = await res.json()
      setLatestLaunch(data)
    }

    fetchData()
  }, [])

  return (
    <>
      <Title size="lg">Latest Launch</Title>
      {latestLaunch && <LaunchCard launch={latestLaunch} />}
    </>
  )
}

export default Landing
