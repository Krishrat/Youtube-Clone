import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import data from './data'

const Container = styled.div`
  width: 300px;
  margin-bottom: 45px;
  cursor: pointer;
  
`
const Image = styled.img`
 width: 100%;
 height: 202px;
 background-color: #999;
 
`
const Details = styled.div`
  display: flex;
  margin-top: 10px; 
   gap: 12px;
`
const ChannelImage = styled.img`
width: 36px;
height: 36px;
border-radius: 50%;
background-color: #999;

`
const Text = styled.div`
    
`
const Title = styled.h1`
    font-size: 16px;
    font-weight: 500;
    color: ${({ theme }) => theme.text};
`
const ChannelName = styled.h2`
font-size: 14px;
    color: ${({ theme }) => theme.textSoft};
    margin: 8px 0px;
`
const Info = styled.div`
    font-size: 14px;
    color: ${({ theme }) => theme.textSoft};
`
const Main = styled.div`
     display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`

function Cards() {
    
    return (
        <Link to='/video/text' style={{ textDecoration: "none" }}>
            <Main>
                {
                    data.map((user) => (
                        <Container>
                            <Image src={user.image} />
                            <Details>
                                <ChannelImage src={user.channelImage} />
                                <Text>
                                    <Title>{user.title} </Title>
                                    <ChannelName>{user.channelName}</ChannelName>
                                    <Info>{user.info}</Info>
                                </Text>
                            </Details>
                        </Container>
                    ))
                }
            </Main>

            
        </Link>
    )
}

export default Cards