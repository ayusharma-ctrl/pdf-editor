# PDF Editor Application

This project allows users to load, edit, and save PDF forms directly in their web browser. The backend server handles fetching and saving the PDF files.

## Get Started

Follow the steps below to set up and run the project locally.

### Clone the Repository

First, clone this repository to your local machine:

```bash
git clone https://github.com/ayusharma-ctrl/pdf-editor
```

### Backend Setup

1. Navigate to the backend server folder in the root directory:

```bash
cd backend
```

2. Navigate to the backend server folder in the root directory:

```bash
npm install
```

3. Navigate to the backend server folder in the root directory:

```bash
npm run start:dev
```
The server will start on `http://localhost:3004`



### Client Setup

1. Navigate to the client folder:

```bash
cd client
```

2. Start a live server to serve the HTML and JavaScript files. You can use VS Code's Live Server extension or any other live server tool. The client will typically start on `http://127.0.0.1:5500`.

3. If the client doesn't start on `http://127.0.0.1:5500`, update the client domain in the `.env` file of the backend server to match the domain where your client is running.



### Usage
Load PDF: Click the "Load PDF" button to fetch and display the PDF form in the browser.
Save PDF: After editing the PDF form fields, click the "Save PDF" button to save the changes back to the server.


### Tada! 🎉
Both services should now be up and running. You can load the PDF, make changes, and save it back to the server.


### Troubleshooting
CORS Issues: Ensure that the client domain is correctly set in the backend server’s environment configuration.
Live Server Not Starting: If you have issues with the live server, double-check the server’s configuration and ensure no port conflicts.