const fs = require('fs');
const path = require('path');

const logPath = path.join(__dirname, '../logs/logs.txt')
const logs = fs.readFileSync(logPath, 'utf8');

function middleware(req, res, next) {
  const { url } = req
  const log = `El usuario ingreso a la ruta: ${url}\n`
  // CARACteres de escape
  console.log(log);

  fs.appendFileSync(logPath, log, 'utf8');

  /// AWS cloudwatch
  /// Azure app insights

  next();
}

module.exports = middleware;