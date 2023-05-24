const http = require("http");
const fs = require("fs");
const requests = require("requests");

const indexFile = fs.readFileSync("index.html","utf-8");

const replaceVal = (tempVal , orgVal) =>{
    let temperature = tempVal.replace("{%location%}",orgVal.name);
    temperature = temperature.replace("{%country%}",orgVal.sys.country);
    temperature = temperature.replace("{%tempVal%}",Math.round(orgVal.main.temp/10));
    temperature = temperature.replace("{%tempmin%}",Math.round(orgVal.main.temp_min/10));
    temperature = temperature.replace("{%tempmax%}",Math.round(orgVal.main.temp_max/10));
    temperature = temperature.replace("{%cloudstatus%}",orgVal.weather[0].main);

    return temperature;

}

const server = http.createServer((req, res) => {
    if (req.url == "/") {
        requests("https://api.openweathermap.org/data/2.5/weather?q=london&appid=92ae4cccd463328893482666feca04c8")
            .on('data',(chunk) => {
                let data = JSON.parse(chunk);
                let objdata = [data];
                const realData = objdata.map((val)=> replaceVal(indexFile,val)).join();
                res.write(realData);
            })
            .on('end', (err) => {
                if (err) return console.log('connection closed due to errors', err);

                res.end();
            });
    }
})

server.listen(8000,"127.0.0.1");