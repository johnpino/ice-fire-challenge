# Ice & Fire Challenge

## Technologies

### NextJS

This is a requirement for the challenge. For this project, **App Router** is being used to take advantage of RSC and Server Rendering.

### TypeScript

This should be a standard for any modern project.

### Tailwind

Due to limited time and project low complexity, Tailwind is the best option for styling.

### HeroIcons

A nice icon library which integrates perfectly with React.

### server-only

A simple library to make sure the code it's executed on the server.

## Architecture

### Single Page

This project only contains a single page for simplicity. Data fetching will be handled by leveraging query params.

### Utility Functions

#### getHouses

This function will fetch all houses. It will return an array of houses, and the corresponding pagination values (first, previous, next and last)

#### getSwornMember

This function takes an id to fetch the corresponding sworn member.

### Components

There're 3 components to display the data: **House**, **SwornMember**, **Navigation**.

## Running the project

Please and **.env** file with the following key/value

```bash
API_BASE_URL=https://www.anapioficeandfire.com/api
```

Then

```bash
npm run dev
```