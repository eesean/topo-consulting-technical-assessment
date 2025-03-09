import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Heading, Container, Text } from '@chakra-ui/react';

const Homepage = () => {
    const [data, setData] = useState([]);

    // Fetch data from Flask API
    useEffect(() => {
        axios.get("http://127.0.0.1:5000")
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <>
            <Heading my={10} fontSize="3xl" color="teal.500">
                Home Page
            </Heading>
            <Container>

                {/* Display fetched data */}
                <Heading fontSize="xl" mt={5}>Data from Flask:</Heading>
                {data.length > 0 ? (
                    data
                ) : (
                    <Text>Loading data...</Text>
                )}
            </Container>
        </>
    );
};

export default Homepage;