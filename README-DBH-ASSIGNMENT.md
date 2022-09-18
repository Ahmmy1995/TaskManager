# DayBreakHotels Front End Developer Assignment 2022

## Brief

Create a basic responsive task manager front end webapp.

1. Each task can only belong to one task board. There can be multiple task boards.

2. Each task **must** have these editable properties:

- status: Enum 1 (doing)|2 (todo)|3 (finished)
- title: String, minimum 5 characters if less then five should give and error
- description: String, minimum 10 characters same thing as above

3. Each task may have (if you make it in time, nice to have) these editable properties:

- linkedTasks: (String[])?, maximum 10

## Technologies

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/), [Redux Toolkit](https://redux-toolkit.js.org/) template (see `README.md`), and `TypeScript`.

If you don't want to use this project to complete the assignment, that's fine; you can use your own project, as long as you use at least the following technologies:

- `Redux` (latest version).
- `React` (latest version).
- `Typescript` (latest version).
- `git` repository.

If you don't want to use the associated `CouchDB` database with sample data and built-in `REST` `API`, that's fine too; as long as you include an equivalent database - preferably prefilled with sample data equivalent to the data provided - and `API`.

## Timeline

It should be possible to complete this assignment within two days. Feel free to use pseudo code, if you don't make it in time.

Feel free to send us an e-mail if you have any questions or are in need of clarification.

## How to start the dev environment

1. Execute: `yarn`
2. Execute: `yarn start`

   If you see a message like this when starting it's expected:

   > this node is not a swarm manager. Use "docker swarm init" or "docker swarm join" to connect this node to swarm and try again

   Just follow the instructions and then try again.

   Please note that the development server is started on port **5983** (if you want, you can change it in `package.json`) and the `CouchDB` `API` is started on port **5984** (if you want, you can change it in `docker-compose.yml`).
