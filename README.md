# Apollo Client + React Demo App

This simple React application fetches a list of posts using Apollo Client and displays them with pagination. The app fetches data from a GraphQL endpoint and dynamically loads more posts when clicking the Next & Prev buttons.

**Note**: Use VPN or Proxy to fetch data.


# View Online

[View Online App](https://fariidlotfi.github.io/graphql-fetch-data-app/)

![screenshot-graphql](https://github.com/user-attachments/assets/03cd05f6-eb1f-471a-ab74-9de9e47ff3e2)

## Features

- Fetch posts from a GraphQL API using Apollo Client.
- Paginate the posts, loading more posts when the user clicks the buttons.
- Handle loading and error states.
- Display the total number of posts available and disable the button when no more posts can be loaded.

## Technologies Used

- **React**: For building the UI components.
- **Apollo Client**: For managing GraphQL queries and caching.
- **TypeScript**: For adding type safety to the React components.

## Getting Started

### Prerequisites

To run this project, you will need to have the following installed on your machine:

- **Node.js**: v18.x or higher
- **npm** or **yarn**

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/fariidlotfi/graphql-fetch-data-app.git

   ```

2. Navigate to the project directory:

   ```bash
   cd graphql-fetch-data-app

   ```

3. Install the dependencies:

   ```bash
    npm install
    # or
    yarn install


   ```

### Running the Application

1. Start the development server:

   ```bash
   npm start
   # or
   yarn start

   ```

2. Open your browser and navigate to http://localhost:5173/.

## Future Updates: Adding Full CRUD Functionality

In future updates, this application will be expanded to include full CRUD (Create, Read, Update, Delete) operations for posts. This will enable users to:

- **Create** new posts through a form submission.
- **Read** and paginate through posts as currently implemented.
- **Update** existing posts by editing their details.
- **Delete** posts from the database with confirmation prompts.

These features will be built using Apollo Client's mutation capabilities, enabling dynamic interaction with the GraphQL API. Stay tuned for further developments!

## Contributing

Contributions are welcome! If you'd like to improve the project or add new features, feel free to fork the repository and submit a pull request. Please ensure your changes are well-documented and tested before submission.
