const fs =require('fs');
const path =require('path');
const logPath = path.join(__dirname, '../logs/logs.txt')


function middleware(req, res, next){
    const { url } = req;
    const log = `el usuario ingreso a: ${url}\n`
    fs.appendFileSync(logPath,log,'utf-8');
    next();
}

module.exports = middleware;
