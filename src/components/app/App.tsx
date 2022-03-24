import React, { useState } from 'react'
import Fuse from 'fuse.js'
import TvShows from '../../assets/tv_shows.json'
import SearchInput from '../searchInput/SearchInput'
import ShowsList from '../showList/ShowsList'
import { AppContainer } from './styles/App.styles'
import { Show } from '../../shared/Show.interface'

const App = () => {
  const [searchResults, setSearchResults] = useState([] as Show[])

  const searchTitle = (query: string): void => {
      const options: Fuse.IFuseOptions<Show> = {
            keys: ['Title'],
        }

       const searchResults: Show[] =
          new Fuse(TvShows, options)
            .search(query.trim())
            .map(result => result.item);

       setSearchResults(searchResults)
  }

  const searchAge = (query: string): void => {
      setSearchResults(TvShows.filter(show =>Number(show['Age'].slice(0, -1)) > Number(query)))
  }

  return  (
  <AppContainer>
    <SearchInput onSearch={searchTitle} buttonText="Search Titles" isFullWidth placeholder="Type Show name here.." />
    <SearchInput onSearch={searchAge} buttonText="Filter By Age" placeholder="Enter Age Here.." />
    <ShowsList shows={searchResults} />
  </AppContainer>
) 
}

export default App