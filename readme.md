# Api pong
Data exchange api for online pong (https://github.com/LipezJ/pong_online).

The main function of the api is to send and receive data from both the host and the guest for the operation of the online game, this api is made with NodeJs using the Socket.io library for communication between sockets, in this case guest-server and served-host.

To store the data I do it locally in a json file and through the Socket.io functions I exchange that data through the sockets.

> #### Local storage
> The reason I use a local json file is because I didn't want to mess around using an external database to store this data, so I went with this solution and I think if the api is uploaded to a hosting service (like AWS or Heroku) the speed of querying the database would not affect the speed of information transfer through the sockets.

#### The api itself has a total of 5 functions.

> **1. _create_**: Generate a new "party" in the party.json file with all data set to 0.  
> **2. _delete_**: Deletes a "party" from the party.json file.  
> **3. _seth_**: receives changes from the host client and stores them in local storage.  
> **4. _setg_**: receives changes from the guest client and stores them in local storage.  
> **5. _get_**: send the game data to the clients.

## How to use

The first thing to do is run this line of code to install the necessary modules for the api to work.
>npm install / npm i

Then you just have to clone the repository and copy this line of code:
> npm start  

_With this you should be able to start the game, simply by placing the url where you mounted the api in the game, for example a local url would be "_http://localhost:3000_" since the server is on port 3000 of our local ip, If you want to change the port of the Socket.io server you just have to change it in the src/index.js file._
