# NoteSpreader - Share Your Notes!

NoteSpreader is a web application that allows users to share their notes with others and interact with fellow users through a built-in chat feature. With NoteSpreader, you can easily create, manage, and share your notes while **connecting with like-minded individuals**.

## Features

![Features](/images/features.jpg)

## How to Use NoteSpreader

## Features

![Features](/images/HowToUse.jpg)

## Technologies Used

NoteSpreader is built using a combination of cutting-edge technologies:

- Frontend: HTML, CSS, JavaScript, **React.js**
- Backend: **Node.js**, **Express.js**
- Database: **MongoDB**
- Real-time Communication: **WebSockets**

## Installation

To run NoteSpreader locally, follow these steps:

1. Clone this repository to your local machine.

   ```bash
   git clone https://github.com/theAbuzar26/NoteSpreader.git
   ```

2. Install the dependencies for both the frontend and backend.

   ```bash
   # Navigate to the frontend directory
   cd NoteSpreader/frontend
   npm install

   # Navigate to the backend directory
   cd ../backend
   npm install

    # Navigate to the socket directory
   cd ../socket
   npm install
   ```

3. Set up your MongoDB database and update the connection string in `backend/.env`.
4. Replace BASE_URL to LocalBASE_URL in frontend/src/requestMethods.js.
5. For using the messenger, Replace EndPoint to your locally running socket url in frontend/src/pages/messenger/messenger.jsx.
6. Start the development servers for both the frontend and backend.
   ```bash
   # In the backend directory
   npm start
   # In the socket directory
   npm start
   # In the frontend directory
   npm start
   ```
7. Visit `http://localhost:3000` in your web browser to access NoteSpreader.

## Contact

If you have any questions, feedback, or inquiries, please contact us at **abuzareqbal2600@gmail.com** or visit our [**website**](#).

Happy NoteSpreading! 📝
