**This project is the frontend part for this [Node API](https://github.com/ThiagoDallacqua/node-api)**

## Setup

To setup this repo is a simple matter of running `yarn install` __preferably__ or `npm install`

## Testing

This application has a simple test routine that you can run using `yarn test` or `npm run test`

## Running

To run this application, after installing the modules using the previous step, you just need to run `yarn start` or `npm start`

**important:** As mentioned before, this application is the frontend part only, so it need the API running in order to be fully functional. So, before start using the application make sure to follow all instructions to run the API first.

## Quick overview

This application will start in the login and register routes as accessible routes, as you'll be logged out/won't have been registered yet.

After register a new user it will automatically login and redirect to the posts route, where you'll be able to see the list of all posts created and a button to create a new post.

Be aware that you'll not be able to delete other user's posts.