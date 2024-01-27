Provision Store E-shop
Welcome to the Provision Store E-shop, a virtual provision marketplace where users can buy various types of provision products. This repository contains the source code for the website, along with information on the project structure, login module, product list module, and API details.

Getting Started
Follow these steps to set up and run the project on your local machine.

Prerequisites
Make sure you have the following installed:

Node.js

Installation
1 . Clone the repository:
git clone https://github.com/your-username/provision-store.git

Navigate to the project directory:
2 . cd provision-store

Install dependencies:
3 . npm install

Configuration
1 : Open the src/environments/environment.ts file.

2 : Update the apiBaseUrl with the appropriate API base URL.

export const environment = {
  production: false,
  apiBaseUrl: 'https://api.kalpav.com/api/v1', // Update this with the actual base URL
};

Running the Application
Run the following command to start the development server:
ng serve

Open your browser and navigate to http://localhost:****/ to access the login page.

Login Module
The login module allows users to log in using their email and password. Email validation and password complexity checks are enforced. The password is hashed using SHA256 before calling the Login API.

Login API:

Endpoint: POST https://apiv2stg.promilo.com/user/oauth/token
Payload Example:

username=abc@abc.com&password=6000ac4bc22ce6ea4adcae78b0ff87412d05e4c3
5912c38a740ff6dcbb97b659&grant_type=password

Product List Module
After successful login, users can access the product list page. The product list is displayed in card format using Angular Material. A search filter allows users to search for products by name.

Product List API:

Endpoint: GET https://api.kalpav.com/api/v1/product/category/retail
Headers: Authorization: Basic UHJvbWlsbzpxNCE1NkBaeSN4MiRHQg== (Use the access token obtained after login)

About Page
The About page provides information about the project's folder structure, challenges faced during development, and step-by-step instructions on how to start the project. Additionally, it includes the logo of the website, which can be found here.

Folder Structure
The project follows a standard Angular folder structure:

provision-store/
|--E-Shop-App /
|   |-- src/
|   |   |-- Pages/
|   |   |   |-- login
|   |   |   |-- product
|   |   |   |-- about
|   |   |-- App.jsx/
|   |   |-- index.html/
|   |   |-- index.css/
|   |   |-- main.jsx
|   |   |-- app.css
|-- package-lock.json
|-- package.json
|-- README.md





# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
