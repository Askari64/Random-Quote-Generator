# Random Quote Generator

The code provided is for a random quote generator in React. It fetches data from the "https://type.fit/api/quotes" API and displays a random quote along with its author. Here's a description of the functionality:

The application starts by importing the necessary dependencies: useEffect and useState from the 'react' library, './App.css' for styling, and axios for making API requests.

The App component is defined, which serves as the main container for the random quote generator. It initializes several state variables using the useState hook:
- 'quote' stores the current quote, including the text and author.
- 'quoteData' is an array that will hold the data fetched from the API.
- 'count' is a counter used to select a random quote from the array.
- 'arrLen' represents the length of the quoteData array.
- 'quoteApi' is the URL of the API endpoint for fetching quotes.

The 'handleClick' function is an event handler for the button click. It generates a random count using Math.random() and sets it as the new count state.

The first useEffect hook runs once when the component mounts. It uses axios to fetch data from the quoteApi endpoint. Upon a successful response, it updates the quoteData state with the fetched data and sets the arrLen state to the length of the quoteData array.

The second useEffect hook runs whenever the count or quoteData state changes. It updates the current quote by setting the quote state to the quoteData[count]. This ensures that a new random quote is displayed whenever the count changes.

The third useEffect hook runs whenever the quote.author state changes. It updates the document title based on the current quote's author. If the author is available, it sets the document title to the author's name; otherwise, it sets it to "Unknown Author".

The JSX returned by the component renders the current quote and author inside h1 and h3 tags, respectively. If the author is unknown, it displays "Unknown Author" instead. There is also a button with the onClick event set to the handleClick function, allowing the user to generate a new random quote.

Overall, this code sets up a simple random quote generator in React, fetching quotes from an API and displaying them dynamically.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

To get started with the random quote generator project built with Vite, follow these steps:

1. Make sure you have Node.js installed on your machine. If not, download and install it from the official Node.js website.

2. Clone the project repository from GitHub or create a new directory for your project.

3. Open a terminal or command prompt and navigate to the project directory.

4. Run the following command to install the project dependencies using npm:
   
   <code>npm install</code>
   

5. Once the dependencies are installed, start the development server by running the command:
   
   <code>npm run dev</code>
   

6. Open your web browser and visit the specified local development URL (usually http://localhost:3000) to see the random quote generator in action.

Now you should be able to view and interact with the random quote generator on your local development environment. The quotes will be fetched from the provided API, and you can click the "Random Quote" button to generate a new quote.

Feel free to explore the code and make any modifications or enhancements to customize the behavior and appearance of the random quote generator according to your preferences.

### Prerequisites

- [Node.js](https://nodejs.org) (version 5.2.0 or above)
- [npm](https://www.npmjs.com/get-npm) (version 10.16.0 or above)

### Installation

1. Clone the repository:
   ```shell
   git clone https://github.com/your-username/your-project.git
   ```

2. Navigate to the project directory:
   ```shell
   cd your-project
   ```

3. Install dependencies:
    ```shell
    npm install
    ```

## Usage

# To start the development server
```shell
npm run dev
```
# To build the project for production
```shell
npm run build
```
For additional scripts and commands, refer to the project's package.json file.

## Contributing
Contributions are welcome! If you find any issues or have suggestions for improvement, please open an issue or submit a pull request.

## License
This project is licensed under the MIT License.


```shell
Make sure to replace "your-username" and "your-project" with your actual GitHub username and project name.
```
