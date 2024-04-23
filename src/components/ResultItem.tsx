import { type Album, type ResultsArtist, type Track } from '../types'

interface ResultItemProps {
  results: Album | ResultsArtist | Track
}

function ResultItem ({ results }: ResultItemProps) {
  return (
    <li>
        <picture>
          <img src={results?.image[0]['#text']} alt={results.mbid}/>
        </picture>
        <strong>{results.name}</strong>
        <span>{(results as ResultsArtist).name}</span>
    </li>
  )
}

export default ResultItem
