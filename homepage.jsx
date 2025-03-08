import React from 'react';
import {
    Heading, 
    Button, 
    Container,
} from '@chakra-ui/react';

const Homepage = () => {

    const username = localStorage.getItem("username");

    return (
        <>
        <Heading my = {10} fontSize = "3xl" color="teal.500">
            Home Page
        </Heading>
        <Container>
            <Button
                m="5px"
                colorScheme = "teal" 
                width = "480px"
                variant="solid"
                type="submit"
                onClick={choosinglanguage}>
                Please choose a Language to learn!!
            </Button>
        </Container>
        </>
    )
}
export default Homepage