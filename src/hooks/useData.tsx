import { useEffect, useState } from 'react'
import { API_ALBUM_SEARCH, API_ARTIST_SEARCH, API_TRACKS_SEARCH } from '../config'
import { type Album, type ResultsArtist, type Track } from '../types'

function useData ({ search }: { search: string, listeners: number }): [Album[], ResultsArtist[], Track[]] {
  const [results, setResults] = useState<{
    album: Album[]
    artist: ResultsArtist[]
    songs: Track[]
  }>({
    album: [],
    artist: [],
    songs: []
  })

  useEffect(() => {
    const idTimeout = setTimeout(async () => {
      const [album, artist, songs] = await Promise.all([
        fetch(API_ALBUM_SEARCH(search)).then(async res => await res.json()),
        fetch(API_ARTIST_SEARCH(search)).then(async res => await res.json()),
        fetch(API_TRACKS_SEARCH(search)).then(async res => await res.json())
      ])
      setResults({
        album: album.results.albummatches.album,
        artist: artist.results.artistmatches.artist,
        songs: songs.results.trackmatches.track
      })
    }, 3000)
    console.log(results)
    return () => { clearTimeout(idTimeout) }
  }
  , [search, results])

  return [results.album, results.artist, results.songs]
}

export default useData
