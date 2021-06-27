# Code_To_Thrive-WebOCode
## A Complete Website named Infinity built by team Code_To_Thrive for WebOCode Hackathon
### Due to Cors Headers always run Frontend server at Port 3000 or you can add your port in app.js file present in infinity_games-Backend folder

### Features
1-Our Website contains more then 6000 games that we have scraped from 5 gaming websites using NodeJS and cherio<br>
2-Game Categories to search for-><br>
a)Action<br>
b)Adventure<br>
c)Arcade<br>
d)Shooting<br>
e)Puzzle<br>
3-Find games that match your keyword<br>

### Setup Backend on Local System
1-Git Clone this Repository using-><br>
`git clone https://github.com/sarthak-2019/Code_To_Thrive-WebOCode.git`<br>
2-Inside infinity_games-Backend folder run-><br>
`npm install`<br>
3-To start backend server-><br>
`npm start`<br>
<br>
### Setup Frontend on Local System
1-Inside infinity_games-Frontend folder run-><br>
`npm install`<br>
2-To start backend server-><br>
`npm start`<br>
### About Frontend
### About Backend 
<br>Built on Express and Nodejs<br>
<br>Database-> MongoDb [We have provided our config.env file containing connection string for connecting to the database<br>
<br>RestAPIs-> We have two API's for getting data from database<br>
<br>To get list of all the games<br>
1-`https://code-to-thrive-webocode.herokuapp.com/games/allgames`<br>
To get list of all the games as per Game Category<br>
2-`https://code-to-thrive-webocode.herokuapp.com/games/allgames/${category}`<br>
