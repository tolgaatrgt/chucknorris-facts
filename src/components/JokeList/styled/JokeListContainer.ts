import styled from "styled-components";

export const JokeListContainer = styled.div`
    display: block;
    height: calc(100vh - 25rem);
    overflow: auto;
    padding: 0 20%;
    text-align: center;

&::-webkit-scrollbar {
    width: 10px;
  }
  
  &::-webkit-scrollbar-track {
    background: black;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #444;
    border-radius: 1rem;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`
