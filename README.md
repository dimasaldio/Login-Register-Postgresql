# Login-Register-Postgre
API for login register using email and google account

passport jwt, sequelize, bcrypt, express

POST : /auth/register
-name
-username
-email
-password



POST : /auth/login
-email_username
-password




GET : /auth/google
link for redirect to google authentication




GET : /auth/google/callback
link for redirect to home
-email
-username
-name
without password, so user can setting their own password, and login using email



