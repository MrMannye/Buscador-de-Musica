export const API_KEY = 'fcd492e73eaf5db3fc46164916b00df9'

export const API_ALBUM_SEARCH = (search: string) => {
  return `https://ws.audioscrobbler.com/2.0/?method=album.search&album=${search}&api_key=${API_KEY}&format=json&limit=5`
}
export const API_ARTIST_SEARCH = (search: string) => {
  return `https://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${search}&api_key=${API_KEY}&format=json&limit=5`
}
export const API_TRACKS_SEARCH = (search: string) => {
  return `https://ws.audioscrobbler.com/2.0/?method=track.search&track=${search}&api_key=${API_KEY}&format=json&limit=5`
}
