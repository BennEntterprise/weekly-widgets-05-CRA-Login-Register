# The project

This is the sixth project in [Weekly Widgets](https://github.com/BennEntterprise/weekly-widgets-05-CRA-Login-Register)

# To Run

1. clone repository

# Figma UI/UX

[Figma Mock Ups](https://www.figma.com/file/oP9lSjqMKfOjnPgTOq4RUQ/ww-05-CRA-Login-Register?node-id=0%3A1)

# About

This is a project With an Node/ExpressJS backend. It is a 'skinny' project in
in that it only contains a minimal login functionality.
There are only 4 screens to get this done.

1. /home: The landing page.
2. /register: Register for the service.(onSuccess => dashboard)
3. /login: A page where you can log in.
4. /dashboard: A dashboard page. Only shows the fields of the user object.

Underneath these pages will be some standard practice registration tasks:

- [] Verify a user does not already exist while trying register.
- [] Allow user to register
- [] Sign/Return a JWT for the new user.
- [] onRegisterSuccess --> redirect to dashboard, store token
- [] onLoginSuccess --> redirect to dashboard, store token
- [] display username in nav bar when logged in.
- [] logout, remove token.

# Notable libraries

ExpressJS
MongooseJS
Bcryptjs
JSONWebToken
Colors

# Steps to complete

1. Create the backend
2. `npm init`
3. `npm i express mongoose colors`
   3a (.gitignore)
4. Write a simple 'hello' server.js
5. Write an endpoint for get('/')
   COMMIT
   [Deployed on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs?singlepage=true)
