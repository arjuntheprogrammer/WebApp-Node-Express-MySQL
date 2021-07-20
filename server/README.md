# Express Backend Server

npm init -y

npm install express
npm install mysql
npm i dotenv
npm i cors
npm install nodemon --save-dev

To run the server demon
npx nodemon

---

## MYSQL ERROR

1. ER_NOT_SUPPORTED_AUTH_MODE: Client does not support authentication protocol requested by server; consider upgrading MySQL client

   Solution: ALTER USER 'web_app'@'localhost' IDENTIFIED WITH mysql_native_password BY 'test123';

---
