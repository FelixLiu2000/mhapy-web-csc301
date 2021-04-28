# MHAPy-Web
Created by Felix Liu & Xi Yu (Kristin) Huang for CSC301, Winter 2021.
## Description 
MHAPy-Web is the web-based counterpart to the MHAPy mobile application.

MHAPy is a social platform for users who wish to improve their mental health. It does so by matching users with 
accountability partners who can help them achieve their mental health goals, while providing a healthy space
for discussion to take place. Other mental health platforms often overwhelm the user with extensive questionnaires and
prescribed routines; MHAPy's chatbot is capable of taking over this cognitive load, which allows the user to focus on
having productive social interactions instead.

## Key Features
The current features of MHAPy-Web constitute a full-stack, working proof-of-concept.

* User data and login integration with the existing MHAPy backend
* RESTful API built using ExpressJS that wraps the existing backend, with session-based authentication
* Authentication and proxying of Socket.IO web socket requests
* React front-end, featuring a working chat system
    * Real-time messaging using Socket.IO that is synchronized with the mobile application
    * Retrieves and displays user chats, messages, and images

## Instructions
A deployed version of MHAPy-Web is available [here](https://mhapy-web.herokuapp.com/).
> NOTE: The page may be slow to load initially due to Heroku. Additionally, there may be problems initially fetching messages or logging in due to latency issues on Heroku; use CTRL+SHIFT+R on the browser to perform a force refresh if you encounter a blank screen.

To use the web application, open the deployed website above. Accounts have been pre-created on the existing MHAPy
backend. To login, use the credentials provided to you and click "Login". 

At the home page, navigate to the chat page by clicking the "Chat" button or entering
 https://mhapy-web.herokuapp.com/chat into your browser.

On the chat page, the active chats associated with your account will be displayed on the left. Click to access the chat
and load existing messages. To send a message, enter the message into the input field and click "Send".

Returning to the page within an hour of logging in will restore your session and allow you to access chats without
logging in again.
 
 ## Development requirements

To deploy the application, `npm >= v7.5.2` and `node >= v14.15.4` is required.

First, install dependencies by running `npm run setup` in a terminal from the main directory.

Building the React front-end:
 * From the `/client` directory, run `npm run build`
 
Starting the ExpressJS server:
> NOTE: The full URL of the MHAPy backend server and a session secret must be set as environment variables, 
> as shown below.
> 
> For instance, `API_URL=http://github.com` `SESS_SECRET=secret123` must be set.
>
> Every deployment of MHAPy-Web needs to set these environment variables before running. For example, this can be done
> using Config Vars on Heroku. 
 * On MacOS / Linux
    * From the main directory, run `API_URL=<MHAPy Server URL here> SESS_SECRET=<a secret string> node server.js`
 * On Windows
     * From the main directory, run `set API_URL=<MHAPy Server URL here> && set SESS_SECRET=<a secret string> &&
      node server.js`
      
 ## Deployment and Github Workflow
Our development takes place primarily on two Git branches: `main` and `dev`. This lets us define both production and
development coding environments. 

New changes to the codebase begin on the `dev` branch, where we resolve any merge conflicts that arise. Commits to `dev`
happen frequently throughout the day, and we communicate to ensure that pulling and pushing happens periodically.
As a part of our Continuous Integration (CI), we apply Prettier and ESLint formatting and linting checks to every
push to `dev` using an automated GitHub actions workflow. This ensures that code style and quality is consistent.

To merge changes from `dev` into production code on `main`, one person first changes the version number in
`package.json` and opens a pull-request with the name `Production build <version>`. The person opening the pull-request
is responsible for fixing merge conflicts that arise, and requests the other person to review the changes once they are
finished. Finally, if CI formatting checks have passed and no merge conflicts remain, the requested reviewer approves
and closes the pull-request. This ensures that both of us are involved in the process of releasing high quality
production code.

We use a Heroku pipeline for Continuous Development (CD). A development app, `mhapy-web-dev`, is immediately and 
automatically deployed after new `dev` branch pushes. This allows us to view a deployed version of any new changes we
make. After merging code to `main`, the production web app `mhapy-web` is also automatically deployed with the new
changes, allowing end-users to view them immediately without further work on our part.

 ## License

MHAPy-Web is licensed under the 
MIT License, available [here](https://github.com/csc301-winter-2021/team-project-17-mhapy/blob/main/LICENSE).

This license was chosen to allow closed source versions of the app to be created by our client, as requested.


