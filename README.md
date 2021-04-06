# Timestamp Microservice

A simple web app to display my skills in HTML5, CSS3 and JavaScript (Node.js with Express)

## About The Project

![Timestamp Microservice](https://res.cloudinary.com/dytnpjxrd/image/upload/v1617745655/My%20Website%20Projects/timestamp_microservice_zyakm6.png)

This is a Node. js (with Express. js) little application which is part of the FCC Back End Certification. It takes a date string and gives you back a JSON with Unix value which is the time in milliseconds and UTC format for the given date.

<br>

### Built With / Requirements :construction_worker:
<img align="left" alt="Visual Studio Code" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/visual-studio-code/visual-studio-code.png" />
<img align="left" alt="HTML5" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png" />
<img align="left" alt="CSS3" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png" />
<img align="left" alt="JavaScript" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" />
<img align="left" alt="Node.js" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png" />
<img align="left" alt="Git" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png" />


<br>

<!-- GETTING STARTED -->

## Getting Started
This is JavaScript Web application which runs in the browser. You need a V8 engine to run JavaScript program. For the purpose of this project I used Google Chrome browser.

### Prerequisites
You need to have Node, yarn and npm installed on your machine. To check if they are installed, open up a terminal window and type the following:
 ```sh
npm -v
yarn -v
node -v
   ```
   
If these commands print out a version number in the terminal, you are good to go. If not, you need to go ahead and install what is missing. For the purpose of this project, I used [Node](https://nodejs.org/en/)

### Installation

1. Clone the repo on your local machine
   ```sh
   git clone https://github.com/Mar-Issah/Timestamp-Microservice-FCC.git
   ```
2. Download and install [Visual Studio Code](https://code.visualstudio.com/)
3. Change directory into the new folder and type the following, this installs the required dependencies
    ```sh
    npm install
   ```
4. To run the React project.
   ```sh
   npm start
   ```

<br>

<!-- USAGE EXAMPLES -->

## Usage
[Click here](https://marsiya-fcc-timestamp.glitch.me/) to view live demo on [Glitch](https://glitch.com/)

1. The API endpoint is:
  ```sh
   GET https://marsiya-fcc-timestamp.glitch.me/API/timestamp/:date_string?
   ```

2. A date string is valid if can be successfully parsed by new Date(date_string) (JS). In our test we will use date strings compliant with ISO-8601 (e.g. "2016-11-20") because this will ensure an UTC timestamp.

3. If the date string is empty it will use the current date

4. If the date string is valid the API returns a JSON object with the following structure:
  ```sh
  {
  "unix": <date.getTime()>,      // 1479663089000
  "utc" : <date.toUTCString()>   // "Sun, 20 Nov 2016 17:31:29 GMT"
}
   ```
5. If the date string is invalid the API returns a JSON object with the following the structure:
```sh
{
  "unix": null,
  "utc": "Invalid Date"
}
  ```

Example:

Request:
```sh
https://marsiya-fcc-timestamp.glitch.me/API/timestamp/2020-01-01
```
Response:
```sh
{
  "unix": 1577836800000,
  "utc": "Wed, 01 Jan 2020 00:00:00 GMT"
}
```

<br>
<!-- CONTRIBUTING -->

## Contributing :family:

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/awesomeFeature`)
3. Commit your Changes (`git commit -m 'Added some awesome features'`)
4. Push to the Branch (`git push origin feature/awesomeFeature`)
5. Open a Pull Request
   <br>

<!-- LICENSE -->

## License :page_facing_up:

Distributed under the `MIT License`. See [LICENSE](https://choosealicense.com/licenses/mit/) for more information.

<!-- CONTACT -->

<br>

## Contact :e-mail:

Marsiya Issah - masy370@gmail.com

Project Link: [https://github.com/Mar-Issah/Timestamp-Microservice-FCC.git](https://github.com/Mar-Issah/Timestamp-Microservice-FCC.git)

Kindly check out more of my projects in [CodePen](https://codepen.io/your-work/)

### More on [Timestamp Microservice](https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/timestamp-microservice) on FreeCodeCamp


