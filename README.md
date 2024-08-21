# iCustomer Backend

Welcome to the iCustomer backend project. This repository contains the server-side code for the iCustomer application, handling all the API requests, database interactions, and authentication processes.

## Getting Started

Follow these steps to set up and run the iCustomer backend on your local machine.

### 1. Clone the Repository

Start by cloning the repository to your local machine:

```bash
git clone https://github.com/akarj/iCustomer-backend.git
```

### 2. Install Dependencies

Navigate to the project directory and install the necessary dependencies using your preferred package manager. You can use `bun` or `npm`:

```bash
bun i
# or
npm i
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory of the project and add the following environment variables:

```bash
PORT={{Backend Application Running Port}}
GOOGLE_CLIENT_ID={{Google OAuth2.0 Client ID}}
GOOGLE_CLIENT_SECRET={{Google OAuth2.0 Client Secret}}
MONGO_URI={{MongoDB Atlas URI}}
JWT_SECRET={{Your JWT Secret}}
```

### 4. Run the Application

To start the backend server, use the following command:

```bash
bun run dev
# or
npm run dev
```

### 5. Access the Application

Once the server is running, you can access the application at [http://localhost:3000](http://localhost:3000) (or the respective `PORT` you've set).
