# Api pong
Data exchange api for online pong (https://github.com/LipezJ/pong_online).

The main function of the api is to send and receive data from both the host and the guest for the operation of the online game, this api is made with NodeJs using the Socket.io library for communication between sockets, in this case guest-server and served-host.

To store the data I do it locally in a json file and through the Socket.io functions I exchange that data through the sockets.

> #### Local storage
> The reason I use a local json file is because I didn't want to mess around using an external database to store this data, so I went with this solution and I think if the api is uploaded to a hosting service (like AWS or Heroku) the speed of querying the database would not affect the speed of information transfer through the sockets.

## How to use

The first thing to do is run this line of code to install the necessary modules for the api to work.
>npm install / npm i

Then you just have to clone the repository and copy this line of code:
> npm start

_With this you should be able to start the game, simply by placing the url where you mounted the api in the game, for example a local url would be "_http://localhost:3000_" since the server is on port 3000 of our local ip, If you want to change the port of the Socket.io server you just have to change it in the index.js file._
