# Chat App ( In Progress )

The project combines a TypeScript backend for reliable server-side operations with React Native's cross-platform capabilities, using Socket.io for instant bidirectional communication between mobile clients and the server.

## Overview

This is a real-time chat application built using:

- **Backend:** Express.js with TypeScript
- **Frontend:** React Native
- **Real-time Communication:** Socket.IO

## Features

- User authentication (JWT)
- Real-time messaging
- Online/offline status
- Room Chats

## Tech Stack

### Backend:

- Node.js
- Express.js
- TypeScript
- Socket.IO
- MongoDB

### Mobile:

- React Native
- React Navigation
- Socket.IO-client

## Installation

### Backend Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/ramzibouzaiene/chat-app.git
   cd chat-app/Back
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file and configure environment variables:
   ```env
   PORT=5000
   MONGO_URI=your_database_uri
   JWT_SECRET=your_secret
   NODE_ENV=your_dev_env
   ```
4. Start the server:
   ```sh
   npm run dev
   ```

### Mobile Setup

1. Navigate to the mobile directory:
   ```sh
   cd chat-app/Mobile
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the React Native app:
   ```sh
   npx react-native start
   ```
4. Run on emulator or device:
   ```sh
   npx react-native run-android  # For Android
   npx react-native run-ios      # For iOS
   ```

## WebSocket Events

### Backend Events:

- `connection`: Triggered when a user connects.
- `join`: A user joins a chat room.
- `message`: Sent when a user sends a message.
- `disconnect`: Triggered when a user disconnects.

### Frontend Events:

- `joinChat({ name, roomId })`: Sends a request to join a chat room.
- `sendMessage({ roomId, senderId, username, text })`: Sends a message to the server.
- `receiveMessage(data)`: Receives a message from the server.
- `userTyping(userId)`: Notifies when a user is typing.

## API Endpoints

| Method | Endpoint                   | Description                       |
| ------ | -------------------------- | --------------------------------- |
| POST   | `/joinChat`                | Adds a user to a chat room.       |
| POST   | `/sendMessage`             | Sends a message in a chat room.   |
| GET    | `/getRoomMessages/:roomId` | Fetches messages from a room.     |
| GET    | `/getRooms`                | Fetches all available chat rooms. |
| POST   | `/createRoom`              | Creates a new chat room.          |
