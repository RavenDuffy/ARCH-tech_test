export interface Launch {
  id: string
  name: string
  date: string
  date_utc: string
  crew: Crew[]
  details: string
  image: string
  links: {
    flicker: {
      original: string[]
    }
    patch: {
      small: string
    }
  }
}

export interface Crew {
  id: string
  name: string
  agency: string
  image: string
  launches: Launch[]
}
