# Memories

A full stack MERN app where users can sign-in to their own accounts, and add/update/delete journal logs to an online diary. The public has access to these and can like and comment on certain memories. Incorporates JWT with tokens that automatically signs users out after a defined period of time. Includes Login with Email via JWT & Google OAuth 2.0, Pagination, Search, and Likes & Comments systems. 

Deployment: Netlify frontend and AWS EC2 backend probably [was considering Heroku backend, but Heroku removed free backend hosting starting Nov. 2022]
-will be exploring other options for the time being

Technologies used: MongoDB, Express, React (with Router, Redux, etc.), NodeJS, Google OAuth (Identity Services)

*** Currently refactoring code for Google OAuth 2.0 - Identity Services (new system - older OAuth deprecated)
*** Currently blocked by integrating Google Identity Services and Redux, will update once deployable ASAP ***
