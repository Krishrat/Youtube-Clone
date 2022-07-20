
import React from 'react'
import styled from 'styled-components'
import Cards from './Cards'
const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;

`
function Home() {
  return (
   <Container>
     <Cards/>
     <Cards/>
   


   </Container>
  )
}

export default Home