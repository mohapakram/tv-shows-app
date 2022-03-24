import React, { useState } from 'react'
import { ShowsListContainer, ListItemContainer, ShowCardContainer } from './styles/ShowsList.styles'
import { Show } from '../../shared/Show.interface'

interface ShowsListProps {
  shows: Show[]
}

interface ListItemProps {
  show: Show
}

const ListItem = ({ show }: ListItemProps) => {
   const [displayCard, setDisplayCard] = useState(false)

   const getSources = (show: Show): (string | undefined)[] => {
    const list = ['Netflix',"Hulu", "Prime Video", "Disney+"]
    const availableSources = list.map(source => {
     if(Object.keys(show).includes(source)) return source
     return undefined
    })
    return availableSources
  }

  const showCard = (show: Show) => (
    <ShowCardContainer>
        <p>IMDB Rating: {show["IMDb"]}</p>
        <p>Age : {show["Age"]}</p>
        <ul>
            <p>Sources:</p>
            {getSources(show).map(source => (
              <li>{source}</li>
            ))}
        </ul>
    </ShowCardContainer>
  )
  return (
    <>
    <ListItemContainer onClick={()=> setDisplayCard(!displayCard)}>
             {show['Title']}
    </ListItemContainer>
     { displayCard && showCard(show)}
    </>
  )
}

const ShowsList = ({shows}: ShowsListProps) => {

  return (
      <ShowsListContainer> 
         {shows.map((show: Show) => (
           <ListItem show={show} />
         ))}  
      </ShowsListContainer>
  )
}

export default ShowsList