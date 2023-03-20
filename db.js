fs = require('fs')

function readData() {
    file = fs.readFileSync('data.json')
    obj = JSON.parse(file)
    return obj.data
}

function addData(nilai) {
    file = fs.readFileSync('data.json')
    obj = JSON.parse(file)
    obj.data.push(nilai)
    data = JSON.stringify(obj)
    fs.writeFileSync('data.json', data);

};

function clearData() {
    let dbCleared = {
        data: []
    }
    dbCleared = JSON.stringify(dbCleared)
    fs.writeFileSync('data.json', dbCleared, 'utf8')
}

module.exports = { readData, addData, clearData }