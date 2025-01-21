import Image from "next/image"
import Link from "next/link"
import { Title } from "@/components"
import { Launch } from "@/types"

const LaunchCard = ({ launch }: { launch: Launch }) => {
  return (
    <Link href={`/launches/${launch.id}`}>
      <Title className="mt-4">{launch.name}</Title>
      <Title size="sm" className="mb-4">
        {new Date(launch.date).toDateString()}
      </Title>
      <Image
        alt="latest"
        src={launch.image}
        width="200"
        height="200"
        priority
      />
    </Link>
  )
}

export default LaunchCard
