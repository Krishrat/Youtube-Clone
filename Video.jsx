import React from "react";
import styled from "styled-components";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import Comments from "./Comments";
import Cards from "./Cards";

const Container = styled.div`
  display: flex;
  gap: 24px;
`;

const Content = styled.div`
  flex: 5;
`;
const VideoWrapper = styled.div``;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled.span`
  color: ${({ theme }) => theme.textSoft};
`;

const Buttons = styled.div`
  display: flex;
  gap: 20px;
  color: ${({ theme }) => theme.text};
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Recommendation = styled.div`
  flex: 2;
`;
const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.span`
  font-weight: 500;
`;

const ChannelCounter = styled.span`
  margin-top: 5px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.textSoft};
  font-size: 12px;
`;

const Description = styled.p`
  font-size: 14px;
`;

const Subscribe = styled.button`
  background-color: #cc1a00;
  font-weight: 500;
  color: white;
  border: none;
  border-radius: 3px;
  height: max-content;
  padding: 10px 20px;
  cursor: pointer;
`;
function Video() {
  return (
    <Container>
    <Content>
      <VideoWrapper>
      
        <iframe
          width="100%"
          height="720"
          src="https://www.youtube.com/embed/AgyTHzjBS-c"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </VideoWrapper>
      <Title>How much Coding to learn for Placements? Data Structure & Algorithms</Title>
      <Details>
        <Info>658,999 views  Apr 27, 2022</Info>
        <Buttons>
          <Button>
            <ThumbUpOutlinedIcon /> 123
          </Button>
          <Button>
            <ThumbDownOffAltOutlinedIcon /> Dislike
          </Button>
          <Button>
            <ReplyOutlinedIcon /> Share
          </Button>
          <Button>
            <AddTaskOutlinedIcon /> Save
          </Button>
        </Buttons>
      </Details>
      <Hr />
      <Channel>
        <ChannelInfo>
          <Image src="https://yt3.ggpht.com/O12gYmCwBASezJpxddXOj1PEirMgxCGX2gOiJ3plomaK4E0K1hr_iobbQEWz1e4QVMflTmug=s88-c-k-c0x00ffffff-no-rj" />
          <ChannelDetail>
            <ChannelName>Apna College</ChannelName>
            <ChannelCounter>2.11M subscribers</ChannelCounter>
            {/* <Description>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Doloribus laborum delectus unde quaerat dolore culpa sit aliquam
              at. Vitae facere ipsum totam ratione exercitationem. Suscipit
              animi accusantium dolores ipsam ut.
            </Description> */}
          </ChannelDetail>
        </ChannelInfo>
        <Subscribe>SUBSCRIBE</Subscribe>
      </Channel>
      <Hr />
      <Comments/>
    </Content>
    <Recommendation>
      <Cards type="sm"/>
      <Cards type="sm"/>
      <Cards type="sm"/>
      <Cards type="sm"/>
      <Cards type="sm"/>
      <Cards type="sm"/>
      <Cards type="sm"/>
      <Cards type="sm"/>
      <Cards type="sm"/>
      <Cards type="sm"/>
      <Cards type="sm"/>
      <Cards type="sm"/>
      <Cards type="sm"/>
    </Recommendation>
  </Container>
  )
}

export default Video