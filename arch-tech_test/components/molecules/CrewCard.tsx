import Image from "next/image"
import Link from "next/link"
import { Title } from "@/components"
import { Crew } from "@/types"

const CrewCard = ({ crew }: { crew: Crew }) => {
  return (
    <Link
      href={`/crew/${crew.id}`}
      className="bg-foreground text-background px-4 py-2"
    >
      <Title className="mt-4">{crew.name}</Title>
      <Title size="sm" className="mb-4">
        {crew.agency}
      </Title>
      <Image
        alt="latest"
        src={crew.image}
        width="200"
        height="0"
        className="w-full h-auto"
      />
    </Link>
  )
}

export default CrewCard
