# Morolium Backend

This is the backend server for the Morolium application, built with Node.js, Express, and MongoDB.

## Setup

1.  **Install Dependencies:**
    ```bash
    npm install
    ```

2.  **Environment Variables:**
    The `.env` file is already created with default values:
    ```
    PORT=5000
    MONGO_URI=mongodb://localhost:27017/morolium
    ```
    Make sure you have MongoDB running locally or update the `MONGO_URI` to point to your MongoDB instance.

3.  **Seed Database:**
    Populate the database with initial data:
    ```bash
    npm run seed
    ```

4.  **Run Server:**
    *   Development (with nodemon):
        ```bash
        npm run dev
        ```
    *   Production:
        ```bash
        npm start
        ```

## API Endpoints

*   `GET /api/tracks` - Get all learning tracks
*   `GET /api/tracks/:id` - Get a specific track
*   `GET /api/exercises` - Get all exercises
*   `GET /api/users/profile` - Get user profile (mocked for now)
