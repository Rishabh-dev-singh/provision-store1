import React, { useState, useEffect } from 'react';
import logoImage from '../Assets/pro.png';
import {
  Input,
  Flex,
  Box,
  Image,
  Text,
  VStack,
  extendTheme,
  ChakraProvider,
  Link,
  Heading,
 
} from '@chakra-ui/react';



const ProductList = ({ accessToken }) => {
   const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchProducts = async () => {
      const filteredProducts = products.filter((product) =>
      product.productCategory.productCategoryName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setProducts(filteredProducts);
    console.log(filteredProducts)
  
   
  };

  const fetchProducts = async () => {
    try {
      const response = await fetch(
        'https://api.kalpav.com/api/v1/product/category/retail',
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (response.ok) {
        const responseData = await response.json();
        setProducts(responseData.response || []);
      } else {
        throw new Error(`Error fetching products. Status: ${response.status}`);
      }
    } catch (error) {
      console.error('Error fetching products', error);
    }
  };
   
  
  useEffect(() => {
    if (searchTerm.trim() === '') {
       fetchProducts();
     } 
   }, [accessToken, searchTerm]);

   useEffect(() => {
    document.title = 'Provision Store - Products';
    return () => {
    };
  }, []);
  

  return (
    <Flex direction="column" align="center">
      <Box
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
        width="100%"
      >
        <Flex justify="space-between" align="center" wrap="wrap">
          {/* Logo */}
          <Image src={logoImage} alt="Logo" h={10} />

          <Heading as="h1" size="lg">
          Provision Store 
          </Heading>

          {/* Search Bar */}
          <Flex align="center">
            <Input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search products by Name"
            
              ml={4}
              //Serach Bar onKeyDown EVent
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  searchProducts()
                  
                }
              }}
              style={{ background: '#ffff' ,color:'black'}}
             
            />
           
          </Flex>

          <Link href="/about" color="white" fontSize="md">
            About
          </Link>
        </Flex>
      </Box>

      {/* Product List */}
      <Box
        overflowY="auto"
        maxHeight="calc(100vh - 80px)" 
      >
        <Flex
          wrap="wrap"
          justify="space-around"
          padding={4}
          borderRadius="md"
          bg="white"
          boxShadow="md"
          mt={20}  // Adjust the margin-top to prevent content from being hidden behind the fixed header
        >
          {Array.isArray(products) && products.length > 0 ? (
            products.map((product) => (
              <Box
                key={product.productCategory.productCategoryId}
                mb={4}
                mx={2}
                maxW={['100%', '48%', '32%']}
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                transition="transform 0.3s ease-in-out"
                _hover={{ transform: 'scale(1.05)' }}
              >
                <Image
                  src={product.productCategory.productCategoryImage}
                  alt={product.productCategory.productCategoryName}
                  maxH="200px"
                  objectFit="cover"
                  borderTopRadius="lg"
                />
                <VStack align="start" p={4}>
                  <Text fontSize="lg" fontWeight="bold">
                    {product.productCategory.productCategoryName}
                  </Text>
                </VStack>
              </Box>
            ))
          ) : (
            <Text>No products found</Text>
          )}
        </Flex>
      </Box>
    </Flex>
  );
};

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'none',
        margin: 0, // Remove default margin to ensure full-width
      },
    },
  },
});

const App = () => (
  <ChakraProvider theme={theme}>
    <ProductList accessToken="yourAccessToken" />
  </ChakraProvider>
);

export default App;
