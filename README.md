# Service Boilerplate
#### Boilerplate project using `@ornate/express` for TypeScript decorated routes

## Getting Started
### Running the service
Run the following commands:
1. `npm run lint`
2. `npm run build`
3. `npm start`

### Running in development mode
Run the following command: `npm run start:watch`
This command builds the TypeScript files into JavaScript and runs the Express server.

Note: It does not run the linter

### Docker
To run with Docker, execute the following commands:
1. `docker build -t <app-name> .`
2. `docker run -p <port desired>:<port server is running on> -d <app-name>`

## What's Included?
* Docker setup
* Decorators for Controllers and Endpoints
* Unit Tests
* Integration Tests
* Example controller