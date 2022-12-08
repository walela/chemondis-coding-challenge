export type User = {
  id: number
  name: string
  username: string
  email: string
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {
      lat: string
      lng: string
    }
  }
  phone: string
  website: string
  company: {
    name: string
    catchPhrase: string
    bs: string
  }
}

export type Album = {
  userId: number
  id: number
  title: string
}

export type Photo = {
  albumId: number
  id: number
  userId: number
  title: string
  url: string
  thumbnailUrl: string
}