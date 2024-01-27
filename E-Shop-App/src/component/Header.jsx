// // Header.js
// import React from 'react';
// import { Link } from 'react-router-dom';
// import logoImage from './Assets/pro.png';

// const Header = () => (
//   <div className="header-container">
//     <Link to="/about">
//       <img src={logoImage} alt="Logo" className="logo" />
//     </Link>
//   </div>
// );

// export default Header;

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
        {/* Folder Structure */}
        <Box mb={8}>
          <Heading as="h2" size="xl" mb={4}>
            Folder Structure
          </Heading>
          <Text>
            <strong>            The project follows a standard React project structure:
</strong>
          </Text>
          <List ml={8} mt={4}>
            <ListItem>src/: The main source code directory.</ListItem>
            <ListItem>src/component/: Header.jsx</ListItem>
            <ListItem>src/Assets/: pro.png</ListItem>
            <ListItem>src/App.jsx: The main entry point of the application.</ListItem>
            <ListItem>src/pages: Login.jsx, About.jsx, product.jsx</ListItem>
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
            <ListItem>Integration with APIs: Connecting and fetching data from external APIs.</ListItem>
            <ListItem>Styling and Responsiveness: Ensuring a consistent and responsive design.</ListItem>
          </List>
        </Box>

        {/* How to Start the Project */}
        <Box>
          <Heading as="h2" size="xl" mb={4}>
            How to Start the Project
          </Heading>
          <Text>
           <strong> To run the project locally, follow these steps:</strong>
          </Text>
          <List ml={8} mt={4}>
            <ListItem>Install dependencies: Run <code>npm install</code>.</ListItem>
            <ListItem>Start the development server: Run <code>npm start</code>.</ListItem>
          </List>
        </Box>
      </Box>

      {/* ... (rest of your code) */}
    </VStack>
  );
};

export default About;

