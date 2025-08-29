# BFHL REST API

A Node.js REST API that processes arrays and returns categorized data including numbers, alphabets, special characters, and various computed values.

## 🚀 Live Demo

**API Endpoint:** `https://vitapi.vercel.app/bfhl`

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [API Endpoints](#api-endpoints)
- [Request/Response Format](#requestresponse-format)
- [Installation](#installation)
- [Usage](#usage)
- [Examples](#examples)
- [Deployment](#deployment)
- [Project Structure](#project-structure)
- [Contributing](#contributing)

## ✨ Features

- **Array Processing**: Categorizes input data into numbers, alphabets, and special characters
- **Number Operations**: Separates odd/even numbers and calculates sum
- **String Manipulation**: Converts alphabets to uppercase and creates concatenated strings
- **Validation**: Comprehensive input validation with error handling
- **CORS Support**: Cross-origin resource sharing enabled
- **Security**: Helmet.js for security headers
- **Logging**: Morgan logging for request monitoring

## 🛠 Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Hosting**: Vercel
- **Security**: Helmet.js
- **Logging**: Morgan
- **CORS**: cors middleware

## 🔗 API Endpoints

### GET `/bfhl`
Returns operation code for testing.

**Response:**
```json
{
  "operation_code": 1
}
```

### POST `/bfhl`
Main endpoint for data processing.

**Request Body:**
```json
{
  "data": ["array", "of", "mixed", "values"]
}
```

## 📝 Request/Response Format

### Request
```json
{
  "data": ["a", "1", "334", "4", "R", "$"]
}
```

### Response
```json
{
  "is_success": true,
  "user_id": "john_doe_17091999",
  "email": "john@xyz.com",
  "roll_number": "ABCD123",
  "odd_numbers": ["1"],
  "even_numbers": ["334", "4"],
  "alphabets": ["A", "R"],
  "special_characters": ["$"],
  "sum": "339",
  "concat_string": "Ra"
}
```

### Response Fields

| Field | Type | Description |
|-------|------|-------------|
| `is_success` | boolean | Operation status |
| `user_id` | string | User identifier in format: {full_name_ddmmyyyy} |
| `email` | string | User email address |
| `roll_number` | string | College roll number |
| `odd_numbers` | string[] | Array of odd numbers as strings |
| `even_numbers` | string[] | Array of even numbers as strings |
| `alphabets` | string[] | Array of alphabets in uppercase |
| `special_characters` | string[] | Array of special characters |
| `sum` | string | Sum of all numbers as string |
| `concat_string` | string | Concatenated alphabets in reverse order with alternating caps |

## 🚀 Installation

### Prerequisites
- Node.js (v22.x or higher)
- npm or yarn

### Local Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/aman4374/VIT_API.git
   cd bfhl-api
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Start production server**
   ```bash
   npm start
   ```

The API will be available at `http://localhost:3000`

## 📖 Usage

### Using cURL

**Test GET endpoint:**
```bash
curl https://your-vercel-app.vercel.app/bfhl
```

**Test POST endpoint:**
```bash
curl -X POST https://your-vercel-app.vercel.app/bfhl \
  -H "Content-Type: application/json" \
  -d '{"data": ["a","1","334","4","R", "$"]}'
```

### Using Postman

1. Set method to `POST`
2. URL: `https://your-vercel-app.vercel.app/bfhl`
3. Headers: `Content-Type: application/json`
4. Body (raw JSON):
   ```json
   {
     "data": ["a","1","334","4","R", "$"]
   }
   ```

### Using JavaScript (Fetch API)

```javascript
const response = await fetch('https://your-vercel-app.vercel.app/bfhl', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    data: ["a","1","334","4","R", "$"]
  })
});

const result = await response.json();
console.log(result);
```

## 📚 Examples

### Example A
**Request:**
```json
{
  "data": ["a","1","334","4","R", "$"]
}
```

**Response:**
```json
{
  "is_success": true,
  "user_id": "john_doe_17091999",
  "email": "john@xyz.com",
  "roll_number": "ABCD123",
  "odd_numbers": ["1"],
  "even_numbers": ["334","4"],
  "alphabets": ["A","R"],
  "special_characters": ["$"],
  "sum": "339",
  "concat_string": "Ra"
}
```

### Example B
**Request:**
```json
{
  "data": ["2","a", "y", "4", "&", "-", "*", "5","92","b"]
}
```

**Response:**
```json
{
  "is_success": true,
  "user_id": "john_doe_17091999",
  "email": "john@xyz.com",
  "roll_number": "ABCD123",
  "odd_numbers": ["5"],
  "even_numbers": ["2","4","92"],
  "alphabets": ["A", "Y", "B"],
  "special_characters": ["&", "-", "*"],
  "sum": "103",
  "concat_string": "ByA"
}
```

### Example C
**Request:**
```json
{
  "data": ["A","ABcD","DOE"]
}
```

**Response:**
```json
{
  "is_success": true,
  "user_id": "john_doe_17091999",
  "email": "john@xyz.com",
  "roll_number": "ABCD123",
  "odd_numbers": [],
  "even_numbers": [],
  "alphabets": ["A","ABCD","DOE"],
  "special_characters": [],
  "sum": "0",
  "concat_string": "EoDdCbAa"
}
```

## 🚀 Deployment

### Vercel Deployment

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel --prod
   ```

### Manual Deployment

1. Push code to GitHub
2. Connect repository to Vercel dashboard
3. Deploy automatically on push

### Environment Variables

No environment variables required for basic functionality. The user information is hardcoded in the `routes/bfhl.js` file.

## 📁 Project Structure

```
bfhl-api/
├── api/
│   └── index.js          # Vercel serverless function entry point
├── middleware/
│   └── validation.js     # Input validation middleware
├── routes/
│   └── bfhl.js          # Main API routes
├── utils/
│   └── processor.js     # Data processing logic
├── app.js               # Express app configuration
├── server.js            # Local development server
├── package.json         # Dependencies and scripts
├── vercel.json          # Vercel deployment configuration
└── README.md           # Project documentation
```

## 🧪 Testing

### Manual Testing

Test the API using the provided examples with cURL, Postman, or any HTTP client.

### Automated Testing (Future Enhancement)

```bash
npm test  # Will be available in future versions
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📈 API Status

- ✅ **Operational**: API is running and processing requests
- ✅ **CORS Enabled**: Cross-origin requests supported
- ✅ **Input Validation**: Comprehensive error handling
- ✅ **Security Headers**: Helmet.js protection enabled

---

