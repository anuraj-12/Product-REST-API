# Product Management REST API

A REST API for managing products built with **Node.js, Express.js, MongoDB, and Mongoose**. This project was created to practice backend development, REST API design, authentication, database operations, filtering, sorting, and pagination.

## 🚀 Features

* User Registration
* User Login
* JWT Authentication
* Access Token & Refresh Token
* Logout
* Product CRUD Operations
* Get Single Product
* Search Products by Name
* Filter Products by Price
* Sort Products by Price
* Pagination
* Request Validation
* Error Handling
* HTTP-only Cookies for Refresh Token

## 🛠️ Technologies Used

* Node.js
* Express.js
* MongoDB
* Mongoose
* JSON Web Token (JWT)
* bcryptjs
* cookie-parser
* Helmet
* JavaScript

## 📁 Project Structure

```text
Server/
├── config/
├── controller/
├── middleware/
├── model/
├── routes/
├── utils/
├── validator/
├── .env
├── app.js
└── package.json
```

## 🔐 Authentication

The API uses JWT authentication with two types of tokens:

* **Access Token** — used to access protected APIs.
* **Refresh Token** — stored in an HTTP-only cookie and used to generate a new access token when the access token expires.

## 📦 Product API

The API supports the following product operations:

| Method | Endpoint        | Description          |
| ------ | --------------- | -------------------- |
| POST   | `/products`     | Create a product     |
| GET    | `/products`     | Get all products     |
| PATCH  | `/products/:id` | Update a product     |
| DELETE | `/products/:id` | Delete a product     |

## 🔎 Search Products

Products can be searched using the `name` query parameter.

```text
GET /products?name=mouse
```

## 💰 Price Filtering

Filter products using minimum and maximum prices.

```text
GET /products?minPrice=1200&maxPrice=5000
```

For example, this can return products between 1200 and 5000.

## ↕️ Sorting

Products can be sorted in ascending or descending order.

```text
GET /products?sort=price-asc
```

```text
GET /products?sort=price-desc
```

## 📄 Pagination

Pagination is supported using `page` and `limit`.

```text
GET /products?page=1&limit=10
```

Example:

```text
Page 1 → Products 1–10
Page 2 → Products 11–20
Page 3 → Products 21–30
```

## ⚙️ Installation

Clone the repository and install the dependencies:

```bash
npm install
```

Create a `.env` file:

```env
PORT=3000
MONGO_URL=your_mongodb_connection_string
ACCESS_TOKEN=your_access_token_secret
REFRESH_TOKEN=your_refresh_token_secret
```

Start the server:

```bash
npm start
```

For development:

```bash
npm run dev
```

The server will run on:

```text
http://localhost:3000
```

## 📚 What I Practiced

Through this project, I practiced:

* Building REST APIs with Express.js
* Connecting MongoDB with Mongoose
* Creating CRUD APIs
* Working with MongoDB queries
* Query parameters
* Regex search
* Price filtering
* Sorting
* Pagination
* JWT authentication
* Access and refresh token flow
* HTTP-only cookies
* API error handling
* Backend project structure

## 👨‍💻 Author

**Anuraj Gautam**

This project was built as part of my backend and MERN stack learning journey.
