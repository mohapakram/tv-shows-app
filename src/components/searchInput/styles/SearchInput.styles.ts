import styled from "styled-components";

interface SearchBarInputProps {
    isFullWidth?: boolean
}

export const SearchContainer = styled.div`
    width: 100%;
    display: flex;
`

export const SearchBarInput = styled.input<SearchBarInputProps>`
  width: ${props => (props.isFullWidth? "100%" : "100px")};
  padding: 5px;
  margin: 5px 15px;
  background: transparent;
  border: 2px solid  #002984;
  color: white;
  outline: none;

  &::placeholder {
   color: white;
  }
`

export const SearchButton = styled.button`
  padding: 5px;
  margin: 10px;
`