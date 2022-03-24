import styled from "styled-components";

export const ShowsListContainer = styled.ul`
    width: 100%;
    text-align: center;
    color: #ffffff;

`

export const ListItemContainer = styled.li`
  padding: 10px;
  background: #002984;
  margin: 10px;
  border-radius: 5px;
  cursor: pointer;
  transition all 0.3s ease;

  &:hover{
      padding: 15px;
  }
`

export const ShowCardContainer = styled.div`
 background: #002984;
 transition all 0.3s ease;
 
 p {
     margin:5px;
     padding: 5px;
 }
`