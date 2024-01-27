import React, { useState, useEffect } from 'react';
import * as CryptoJS from 'crypto-js';
import { FiMail, FiLock, FiEye, FiEyeOff } from 'react-icons/fi';
import {
  Box,
  Input,
  Button,
  FormControl,
  FormLabel,
  InputGroup,
  InputRightElement,
  Image,
  useToast,
} from '@chakra-ui/react';

import logoImage from '../Assets/pro.png'; // Update with the correct path

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  // const [rotating, setRotating] = useState(true);

  // // const toast = useToast();

  
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleLogin = async () => {
    try {
      if (!validateEmail(email) || !validatePassword(password)) {
        setError('Please enter a valid email and password. 😕');
        setEmail('');
        setPassword('');
        return;
      }

      const hashedPassword = CryptoJS.SHA256(password).toString(CryptoJS.enc.Hex);

      const authHeader = {
        headers: {
          Authorization: 'Basic UHJvbWlsbzpxNCE1NkBaeSN4MiRHQg==',
        },
      };

      const response = await fetch(
        'https://apiv2stg.promilo.com/user/oauth/token',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            ...authHeader.headers,
          },
          body: `username=${encodeURIComponent(email)}&password=${encodeURIComponent(
            hashedPassword
          )}&grant_type=password`,
        }
      );

      if (!response.ok) {
        throw new Error(`Login failed. Status: ${response.status}`);
      }

      const responseData = await response.json();
      const accessToken = responseData.access_token;
      onLogin(accessToken);

      toast({
        title: 'Login Successful',
        description: 'You have successfully logged in.',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      console.error('Login failed', error);
      console.log('API Response:', error.response);
      if (error.response && error.response.data) {
        console.log('API Response Data:', error.response.data);
      }
      setError('Login failed. Please check your credentials. 😞');
    }
  };

  return (
    <Box
      maxW="400px"
      m="auto"
      p={6} // Adjusted padding for increased size
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="lg"
    >
      <Image src={logoImage} alt="Logo" mx="auto" mb={1} />

      <FormControl>
        <InputGroup>
          <FiMail className="input-icon" />
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            ml={4}
            
          />
        </InputGroup>
      </FormControl>

      <FormControl mt={4}>
        <InputGroup>
          <FiLock className="input-icon"  />
          <Input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            ml={4}
          />
          <InputRightElement width="4.5rem">
            <Button
              h="1.75rem"
              size="sm"
              onClick={() => setShowPassword(!showPassword)}
              variant="unstyled"
            >
              {showPassword ? <FiEye /> : <FiEyeOff />}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      {error && (
        <Box className="error-message" mt={4} color="red.500">
          {error}
        </Box>
      )}

      <Button
        className="login-button"
        mt={4}
        colorScheme="teal"
        onClick={handleLogin}
      >
        Login
      </Button>
    </Box>
  );
};

export default Login;
