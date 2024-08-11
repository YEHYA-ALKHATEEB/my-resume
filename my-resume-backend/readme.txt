npm install express mongoose bcryptjs jsonwebtoken body-parser dotenv
express: Web framework for Node.js.
mongoose: MongoDB object modeling tool.
bcryptjs: Library for hashing passwords.
jsonwebtoken: Library for creating and verifying JWT tokens.
body-parser: Middleware to parse incoming request bodies.
#dotenv: 
Module to load environment variables.

mkdir config controllers models routes services

#GENERATE JWT SECRET KEY
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
