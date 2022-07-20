
import { useState } from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import Menu from "./Menu";
import Navbar from "./Navbar";
import { darkTheme, lightTheme } from "./Theam";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Video from "./Video";
import SignIn from "./SignIn";
const Container = styled.div`
  
 
  display: flex;
  
   

`
const Main = styled.div`
   flex: 7;
   background-color: ${({ theme }) => theme.bg};
`
const Wrapper = styled.div`

`

function App() {
  const [darkMode, setDarkmode] = useState(true);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>

      <Container>
        <BrowserRouter>
          <Menu darkMode={darkMode} setDarkmode={setDarkmode} />
          <Main>
            <Navbar />
            <Wrapper>
              <Routes>
                <Route path="/">
                  <Route index element={<Home />} />
                  <Route path="video">
                    <Route path=":id"  element={<Video />} />
                  </Route>
                </Route>
                <Route path="/signin" exact element={<SignIn/>}/>


              </Routes>
            </Wrapper>
          </Main>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;
