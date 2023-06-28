const path = require('path');
const fs = require('fs');
const mockData = require('./data.js');

const data = JSON.stringify(mockData);
const filePath = path.join(__dirname, 'db.json');
// const filePath = path.join('db.json'); // wo/ __dirname will create file in the dir that node was executed in

fs.writeFile(filePath, data, function (err) {
    err ? console.log(err) : console.log('db created');
});
