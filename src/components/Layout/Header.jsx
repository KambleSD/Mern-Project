import React from "react"
import {ColorModeSwitcher} from '../../ColorModeSwitcher';
import { Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, HStack, VStack, space} from "@chakra-ui/react";
import { RiMenu5Fill } from 'react-icons/ri'
import { Link } from "react-router-dom";
import { useDisclosure } from "@chakra-ui/react";

const LinkButton = ({url='/',title="Home"})=>
(
   <Link to={url}>
   <Button variant={"ghost"}>{title}</Button>
   </Link>
);


const Header = () => {
  const {onOpen, onClose, isOpen} = useDisclosure();

  const isAthenticated=true;

  return (
    <>
      <ColorModeSwitcher/>
      <Button onClick={onOpen}
      colorScheme={"yellow"} 
      width='12'
      height={'12'}
      rounded="full"
      position={"fixed"}
       top="6" left="6">
        <RiMenu5Fill/>
      </Button>
        <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay backdropBlur={"5px"}/>
            <DrawerContent>
                <DrawerHeader borderBottom={"1px"}>Courses</DrawerHeader>
                <DrawerBody>
                    <VStack spacing={4} alignItems={"flex-start"}>
                      <LinkButton url="/" title="Home"/>
                      <LinkButton url="/courses" title="Browse Courses"/>
                      <LinkButton url="/request" title="Request a Courses"/>
                      <LinkButton url="/contact" title="Contact to us"/>
                      <LinkButton url="/contact" About="About"/>
                      <HStack justifyContent={"space-evenly"} position={"absolute"}bottom={'4vh'}>

                      </HStack>
                    </VStack>
                    
                </DrawerBody>
            </DrawerContent>
        </Drawer>

    </>
  )
}

export default Header;
 
