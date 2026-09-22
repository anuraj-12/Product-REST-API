# Product Management REST API

A REST API for product management built with **Node.js, Express.js, MongoDB, and Mongoose**. The project includes authentication, role-based authorization, CRUD operations, product search, filtering, sorting, and pagination.

## 🚀 Features

### Authentication

* User Registration
* User Login
* JWT Authentication
* Access Token & Refresh Token
* Logout
* HTTP-only Cookie for Refresh Token

### Product Management

* Registered users can view products.
* Admin can add products.
* Admin can update products.
* Admin can delete products.
* Product search by name.
* Product price filtering.
* Product sorting.
* Product pagination.

### 🔐 Role-Based Authorization

The API has two types of users:

**Registered User**

* Can access product read/get APIs.
* Must be authenticated to view products.

**Admin**

* Can add new products.
* Can update existing products.
* Can delete products.
* Can also access product read/get APIs.

## 📦 Product API

| Method | Endpoint        | Access          | Description          |
| ------ | --------------- | --------------- | -------------------- |
| POST   | `/products`     | Admin           | Add a product        |
| GET    | `/products`     | Registered User | Get products         |
| GET    | `/products/:id` | Registered User | Get a single product |
| PATCH  | `/products/:id` | Admin           | Update a product     |
| DELETE | `/products/:id` | Admin           | Delete a product     |

## 🔎 Search

Search products by name:

```text
GET /products?name=mouse
```

## 💰 Price Filtering

Filter products by price:

```text
GET /products?minPrice=1200&maxPrice=5000
```

## ↕️ Sorting

Sort products by price:

```text
GET /products?sort=price-asc
```

```text
GET /products?sort=price-desc
```

## 📄 Pagination

Pagination is supported using `page` and `limit`:

```text
GET /products?page=1&limit=10
```

Example:

```text
Page 1 → Products 1–10
Page 2 → Products 11–20
Page 3 → Products 21–30
```

## 🛠️ Technologies Used

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcryptjs
* cookie-parser
* Helmet
* JavaScript

## ⚙️ Installation

Install dependencies:

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

Start the development server:

```bash
npm run dev
```

The API will run on:

```text
http://localhost:3000
```

## 📚 What I Practiced

* REST API development
* Express.js routing
* MongoDB and Mongoose
* CRUD operations
* JWT authentication
* Access and refresh token handling
* HTTP-only cookies
* Role-based authorization
* MongoDB query filtering
* Regex search
* Sorting
* Pagination
* API error handling

## 👨‍💻 Author

**Anuraj Gautam**

Built as part of my backend and MERN stack learning journey.
