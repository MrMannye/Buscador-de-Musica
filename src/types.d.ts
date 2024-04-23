export interface Attr {
  for: string
}

export interface Albummatches {
  album: Album[]
}

export interface Album {
  name: string
  artist: string
  url: string
  image: Image[]
  streamable: string
  mbid: string
}

export interface ResultsArtist {
  name: string
  mbid: string
  url: string
  image: Image[]
  streamable: string
  ontour: string
  stats: Stats
  similar: Similar
  tags: Tags
  bio: Bio
}

export interface Bio {
  links: Links
  published: string
  summary: string
  content: string
}

export interface Links {
  link: Link
}

export interface Link {
  '#text': string
  rel: string
  href: string
}

export interface Similar {
  artist: ArtistElement[]
}

export interface ArtistElement {
  name: string
  url: string
  image: Image[]
}

export interface Stats {
  listeners: string
  playcount: string
}

export interface Tags {
  tag: Tag[]
}

export interface Tag {
  name: string
  url: string
}

export interface OpensearchQuery {
  '#text': string
  role: string
  startPage: string
}

export interface Trackmatches {
  track: Track[]
}

export interface Track {
  name: string
  artist: string
  url: string
  streamable: Streamable
  listeners: string
  image: Image[]
  mbid: string
}

export interface Image {
  '#text': string
  size: Size
}

export enum Size {
  Extralarge = 'extralarge',
  Large = 'large',
  Medium = 'medium',
  Small = 'small',
}

export enum Streamable {
  Fixme = 'FIXME',
}

export interface Results {
  album: Album[]
  artist: ResultsArtist[]
  songs: Track[]
}
