// About.jsx
import React, { useEffect } from 'react';
import {
  Box,
  Heading,
  Text,
  VStack,
  Link,
  List,
  ListItem,
  Image,
  Flex,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const About = () => {
  useEffect(() => {
    document.title = 'E-Shop App - About';
    return () => {
      // Cleanup if needed
    };
  }, []);

  return (
    <VStack align="center" spacing={8} p={8}>
      {/* Header */}
      <Flex
        direction="row"
        align="center"
        as="header"
        w="100%"
        p={4}
        bg="teal.500"
        color="white"
        boxShadow="md"
        mb={4}
        position="fixed"
        top="0"
        zIndex="999"
        style={{
          borderBottom: '2px solid white',
          padding: '12px 0',
        }}
      >
        {/* Logo */}
        <Image src="/src/Assets/pro.png" alt="Logo" h={10} />

        {/* Heading (Centered) */}
        <Heading as="h1" size="lg" flex="1" textAlign="center" mb={2}>
          E-Shop App
        </Heading>

        {/* Link (Right-aligned) */}
        <Link
          as={RouterLink}
          to="/product-list"
          color="white"
          fontSize="md"
          style={{
            textDecoration: 'none',
            marginLeft: 'auto',
            marginRight: '20px',
          }}
        >
          Product
        </Link>
      </Flex>

      {/* About Project Section */}
      <Box w="100%" textAlign="left">
        {/* About E-Shop App */}
        <Box mb={8}>
          <Heading as="h2" size="xl" mb={4}>
            About E-Shop App
          </Heading>
          <Text>
            E-Shop App is a modern web application built with React and Chakra UI. It provides a simple interface to browse and shop for products.
          </Text>
        </Box>

        {/* Folder Structure */}
        <Box mb={8}>
          <Heading as="h2" size="xl" mb={4}>
            Folder Structure
          </Heading>
          <Text>
            <strong>The project follows a standard React project structure:</strong>
          </Text>
          <List ml={8} mt={4}>
            <ListItem><strong>src/:</strong> The main source code directory.</ListItem>
            <ListItem><strong>src/component/:</strong> Header.jsx</ListItem>
            <ListItem><strong>src/Assets:</strong> pro.png</ListItem>
            <ListItem><strong>src/App:</strong> The main entry point of the application.</ListItem>
            <ListItem><strong>src/pages:</strong> Login.jsx, Product.jsx, About.js</ListItem>
          </List>
        </Box>
        {/* installed dependencies */}
        <Box mb={8}>
          <Heading as="h2" size="xl" mb={4}>
          installed dependencies 
          </Heading>
          
          <List ml={8} mt={4}>
            <ListItem> <strong>@chakra-ui/react</strong>version: 2.8.2 </ListItem>
            <ListItem><strong>crypto-js:</strong>version: 4.2.0 </ListItem>
            <ListItem><strong>react</strong>version: 18.2.0</ListItem>
            <ListItem><strong>react-dom</strong>version: 18.2.0</ListItem>
            <ListItem><strong>react-icons</strong>version:5.0.1</ListItem>
            <ListItem><strong>react-router-dom</strong> version: 6.21.3</ListItem>

          </List>
        </Box>
        {/* Challenges Faced */}
        <Box mb={8}>
          <Heading as="h2" size="xl" mb={4}>
            Challenges Faced
          </Heading>
          <Text>
            <strong> Developing the application posed some challenges, including:</strong>
          </Text>
          <List ml={3} mt={2}>
            <ListItem><strong>Integration with APIs:</strong> Connecting and fetching data from external APIs.</ListItem>
            <ListItem><strong>Styling and Responsiveness: </strong> Ensuring a consistent and responsive design.</ListItem>
          </List>
        </Box>

        {/* Getting Started */}
        <Box>
          <Heading as="h2" size="xl" mb={4}>
            Getting Started
          </Heading>
          <Text>
            <strong>To run the project locally, follow these steps:</strong>
          </Text>
          <List ml={8} mt={4}>
            <ListItem><strong>Install dependencies:</strong> <code>npm install</code>.</ListItem>
            <ListItem><strong>Start the development server: </strong> <code>npm run dev</code>.</ListItem>
          </List>
        </Box>
        
      </Box>

    
    </VStack>
  );
};

export default About;
