import React from 'react'
import { NavLink } from "react-router-dom";
import styled from 'styled-components'
import YT from "./logo-yt.png";
import HomeIcon from '@mui/icons-material/Home';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import LibraryAddOutlinedIcon from '@mui/icons-material/LibraryAddOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import SportsBasketballOutlinedIcon from '@mui/icons-material/SportsBasketballOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import MovieCreationOutlinedIcon from '@mui/icons-material/MovieCreationOutlined';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Link } from 'react-router-dom';


const Container = styled.div`
    flex: 1;
    background-color: ${({ theme }) => theme.bg};
    height: 100vh;
    color: ${({ theme }) => theme.text};
    font-size: 14px;
    position: sticky;
    top: 0%;
`
const Wrapper = styled.div`
    padding: 18px 26px;

`
const Logo = styled.div`
   display: flex;
   align-items: center;
   gap: 5px;
   font-weight: bold;
   
margin-bottom: 16px;

`
const Img = styled.img`
    height: 30px;

`
const Item = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    cursor: pointer;
    /* padding: 2px 0px; */
    font-size: 12px;
`
const Hr = styled.hr`
margin: 15px 0px;
border: 0.5px solid ${({ theme }) => theme.soft};
`
const Login = styled.div`
    
`
const Button = styled.button`
padding: 5px 15px;
background-color: transparent;
border: 1px solid #3ea6ff;
color: #3ea6ff;
border-radius: 3px;
font-weight: 500;
margin-top: 10px;
cursor: pointer;
display: flex;
align-items: center;
gap: 5px;
`


function Menu({ darkMode, setDarkmode }) {
    return (
        <Container>
            <Wrapper>
                <Link to="/" style={{ textDecoration: "none" }}>
                    <Logo>
                        <Img src={YT} />
                        YouTube
                    </Logo>
                </Link>
                <NavLink to="/" style={{textDecoration: "none" , }}>
                    <Item>
                        <HomeIcon />
                        Home
                    </Item>
                </NavLink>
                
                <Item>
                    <ExploreOutlinedIcon />
                    Explore
                </Item>
                <Item>
                    <SubscriptionsOutlinedIcon />
                    Subcription
                </Item>
                <Hr />
                <Item>
                    <LibraryAddOutlinedIcon />
                    Library
                </Item>
                <Item>
                    <HistoryOutlinedIcon />
                    History
                </Item>
                <Hr />
                <Login>
                    Sign in to like videos, comment, and subscribe.
                    <Button> <AccountCircleOutlinedIcon />SIGN IN</Button>
                </Login>
                <Hr />
                <Item>
                    <LibraryMusicOutlinedIcon />
                    Music
                </Item>
                <Item>
                    <SportsBasketballOutlinedIcon />
                    Sports
                </Item>
                <Item>
                    <SportsEsportsOutlinedIcon />
                    Gaming
                </Item>
                <Item>
                    <MovieCreationOutlinedIcon />
                    Movies
                </Item>
                <Item>
                    <NewspaperOutlinedIcon />
                    News
                </Item>
                <Item>
                    <LiveTvOutlinedIcon />
                    Live
                </Item>
                <Hr />
                <Item>
                    <SettingsOutlinedIcon />
                    Setting
                </Item>
                <Item>
                    <FlagOutlinedIcon />
                    Report
                </Item>
                <Item>
                    <HelpOutlineOutlinedIcon />
                    Help
                </Item>
                <Item onClick={() => setDarkmode(!darkMode)}>
                    <LibraryAddOutlinedIcon />
                    Light Mode
                </Item>
            </Wrapper>
        </Container>
    )
}

export default Menu