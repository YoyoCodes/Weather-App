# Weather NOW
In progress...<br>
Weather NOW is a React front end app that uses the data from an external API to provide information about the current values in a city picked by user input.

## How to use
Fork and clone the repo.
The credentials for the weather API are in a .env file that has been gitignored. To be able to connect to the API you'd have to create an account [here](https://openweathermap.org/api) or get in touch with me.
To run the app use `npm start`.

## About
Trough the API call I obtained a Json object from where I selected the relevant information. For the Icon I isolated the icon name from the Json Object and then I interpolated it's value in a string url that changes dynamically for each request.<br>
 <a href="https://imgbb.com/"><img src="https://image.ibb.co/e0Pbfe/Weather_Json.png" alt="Weather_Json" border="0"></a><br />
 
 ### Final product:
 <a href="https://ibb.co/iAUj0e"><img src="https://preview.ibb.co/jLvP0e/App.png" alt="App" border="0"></a><br />
