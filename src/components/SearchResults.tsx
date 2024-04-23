import ResultItem from './ResultItem'
import { type Album, type ResultsArtist, type Track } from '../types'

interface ResultItemProps {
  results: Album[] | ResultsArtist[] | Track[]
}

function SearchResults ({ results }: ResultItemProps) {
  return (
    <ul>
        {
            results.map((album, index) => {
              return (
                <ResultItem key={index} results={album}/>
              )
            })
        }
    </ul>
  )
}

export default SearchResults
