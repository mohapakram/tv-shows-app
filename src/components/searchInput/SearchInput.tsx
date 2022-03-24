import React, { useState } from 'react'
import { SearchBarInput, SearchContainer, SearchButton } from './styles/SearchInput.styles'

interface SearchBarInputProps {
    onSearch(query: string): void 
    placeholder: string
    isFullWidth?: boolean
    buttonText: string
}

const SearchInput = ({ onSearch, buttonText, ...props }: SearchBarInputProps) => {
    const [query, setQuery] = useState("")

   return (
       <SearchContainer>
           <SearchBarInput 
            value={query} 
            onChange={(e)=> setQuery(e.target.value)} 
            {...props}  
            />
              <SearchButton onClick={()=> onSearch(query)}> 
               {buttonText}
             </SearchButton>
       </SearchContainer>
   ) 
}

export default SearchInput