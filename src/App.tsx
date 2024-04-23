import { useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar'
import SearchResults from './components/SearchResults'
import useData from './hooks/useData'

function App () {
  const [filters, setFilters] = useState<{ search: string, listeners: number }>({
    search: '',
    listeners: 0
  })

  const [album, artist, songs] = useData({ search: filters.search, listeners: filters.listeners })

  return (
    <div className='container'>
      <SearchBar filters={filters} setFilters={setFilters}/>
      {
        (album.length > 0)
          ? <>
            <h2>Albums</h2>
            <SearchResults results={album}/>
            <h2>Artistas</h2>
            <SearchResults results={artist}/>
            <h2>Canciones</h2>
            <SearchResults results={songs}/>
          </>
          : <h2>Busca el nombre de un Album, Artista o Cancion</h2>
      }

    </div>
  )
}

export default App
