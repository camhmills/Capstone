# GraphIt's Purpose

Initially, this project was to visualize data from the EOG assessment found online. I'd like to further expand it to uptake user datasets, and visualize them as the user sees fit.

# Technologies Used

GraphIt utilizes common libraries, and functions as a PERN stack (PostgreSQL, Express.js, Node.js, and React.js). Other technologies used in this project are GraphQL, boring-avatars,
styled-components, react-redux, react-router, bcrypt, and jsonwebtoken.

# Structure So Far

GraphIt is a fully-functional full-stack application. Users can register and receive authentication server, after which they are allowed to log-in after successful registration.
A json web token maintains their credibility as long as they do not log out. All requests are handled either by EOG's API or by the server.

# General Functionality

This project has most of the functionality a user would come to expect of a modern website. Most actions (such as logging in or registering) redirect the user to the appropriate page as events happen. The user can also change their password on the '/profile' page. Bcrypt maintains security for the database on the server side, and also checks passwords as requests are sent from the client to the server. The user can also easily view current visualized data on the '/home' page. A few minor pieces of user experience functionality are also embedded; certain buttons are disabled by default until their conditions are satisfied, notifying the user they must correctly fill out certain fields.

# Weaknesses/Improvements

There are plenty of improvements I could make to this website. For example, allowing a user to upload their own data set, and choosing their preferred/suitable form of visualization.
Another improvement I'd like to make includes adding authorization roles - such as an admin, moderator, and user. Different roles possess different tools to use on the website itself.