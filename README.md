# WEB-APP: Node Express MySQL

## FEATURES

1. Add name to the DB
2. Search name in the DB
3. List of all the name in the DB
4. Update any name the DB
5. Delete any row in the DB

### TECH STACK

1. NodeJS
2. ExpressJS
3. MySQL
4. HTML

---

### Commands

Server Setup and Installation:

- $ cd server

- $ npm init -y

- $ npm install express

- $ npm install mysql

- $ npm i dotenv

- $ npm i cors

- $ npm install nodemon --save-dev

To run the server demon:

- $ npx nodemon

---

### MYSQL ERROR

1. ER_NOT_SUPPORTED_AUTH_MODE: Client does not support authentication protocol requested by server; consider upgrading MySQL client

   Solution: ALTER USER 'web_app'@'localhost' IDENTIFIED WITH mysql_native_password BY 'test123';

---

### SCREENSHOTS

Home Page:
![image](https://user-images.githubusercontent.com/15984084/126317699-3574428a-5dff-44a5-9587-f83e0012e41f.png)

After Adding Data to the DB:
![image](https://user-images.githubusercontent.com/15984084/126317759-54850004-cdae-4fee-b00f-ed0ed60f58f2.png)

Searching Name:
![image](https://user-images.githubusercontent.com/15984084/126317798-42b34440-3bce-4ad2-80c1-d2bd2ea84b62.png)

---

### REFERENCE

1. Nsquared Coding: <https://youtu.be/vrj9AohVhPA>
2. <https://github.com/npatel023/ExpressMySQL/tree/master/client>

---
