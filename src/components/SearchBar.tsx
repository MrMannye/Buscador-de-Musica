import React from 'react'

function SearchBar ({ filters, setFilters }: { filters: { search: string, listeners: number }
  setFilters: React.Dispatch<React.SetStateAction<{
    search: string
    listeners: number
  }>> }) {
  return (
    <section className="container-form">
      <label htmlFor="search">Search: </label>
      <input type="text" name="search" value={filters.search} onChange={(e) => { setFilters(prevFilters => { return { ...prevFilters, search: e.target.value } }) }} />
      <label htmlFor="listeners">Listeners: </label>
      <input type="range" min={1000} max={100000000} name="listeners" value={filters.listeners} onChange={(e) => { setFilters(prevFilters => { return { ...prevFilters, listeners: parseInt(e.target.value) } }) }} />
      <span>{filters.listeners}</span>
    </section>
  )
}

export default SearchBar
