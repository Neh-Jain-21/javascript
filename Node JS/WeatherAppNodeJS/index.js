const http = require('http');
const fs = require('fs');
const requests = require('requests');

const homeFile = fs.readFileSync("./WeatherAppNodeJS/Home.html", "utf-8");

const replaceval = (tempval, orgval) => {
  var kelvin = -273.15;
  let temperature = tempval.replace("{%tempval%}", Math.trunc(orgval.main.temp+kelvin));
  temperature = temperature.replace("{%tempmin%}", Math.trunc(orgval.main.temp_min+kelvin));
  temperature = temperature.replace("{%tempmax%}", Math.trunc(orgval.main.temp_max+kelvin));
  temperature = temperature.replace("{%location%}", orgval.name);
  temperature = temperature.replace("{%country%}", orgval.sys.country);
  temperature = temperature.replace("{%tempstatus%}", orgval.weather[0].main);
  return temperature;
}

const server = http.createServer((req,res) => {
    if (req.url == "/") {
      requests("http://api.openweathermap.org/data/2.5/weather?q=Gandhinagar&appid=300c302b076917b72ef751c8938a1065")
      .on('data', (chunk) => {
        const objdata = JSON.parse(chunk);
        const arrdata = [objdata];
        const realtimedata = arrdata.map(val => replaceval(homeFile,val)).join("");
        res.write(realtimedata);
      })
      .on('end', (err) => {
        if (err) return console.log('connection closed due to errors', err);
        res.end();
      });
    }
    else {
        res.end("File Not Found");
    }
});

server.listen(80,"127.0.0.1",() => {
  console.log("Server Created");
}); 