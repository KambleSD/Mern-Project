import React from 'react'
import{Button, Heading, Stack, VStack,Image,Text,Box, HStack,} from "@chakra-ui/react"
import{Link} from "react-router-dom"; 
import './home.css'
import vg from "../../assests/images/bg.png"
import {CgGoogle,CgYoutube} from "react-icons/cg"
import {SiCoursera,SiUdemy} from "react-icons/si"
import {DiAws} from "react-icons/di"
import introVideo from "../../assests/videos/intro.mp4";



const Home=()=> {
  return <section className='home'>

    <div className='container'>
      <Stack
        direction={["column","row"]}
        height="100%"
        justifyContent={["center","space-between"]}
        alignItems="center"
        spacing={['16','56']}
      >
        <VStack width={"100%"} alignItems={["center","flex-end"]}> 
          <Heading children="Learn from Shekhar Sir" size={"lg"}/>
          <Text children="Find Valueable Content At Reasonable Price"/>
          <Link to="/courses">
            <Button size={"lg"} colorScheme={'yellow'}>Exploer Now</Button>
          </Link>
        </VStack>

        <Image className='Vector-graphics' boxSize={"md"} src={vg}/>
      </Stack>
    </div>
    <Box padding={"8"}  bg={"blackAlpha.800"}>
        <Heading 
        textAlign={"center"}
        fontFamily={"body"}
        color={"yellow.400"}
        children="OUR BRANDS"/>
    </Box>
    <HStack className='brandsBanner' justifyContent={"space-around"} margin top={"6"}>
      <CgGoogle/>
      <CgYoutube/>
      <SiCoursera/>
      <SiUdemy/>
      <DiAws/>
  </HStack>
  <div className='container2'>
    <video autoPlay controls="nodownlade no fullscreen" src={introVideo}></video>

  </div>
  </section>
 
}

export default Home
