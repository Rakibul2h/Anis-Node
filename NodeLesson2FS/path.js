// import path

const path=require('path');

// to see extentsion name
 const extensionName=path.extname("index.html");
 console.log(extensionName);

// join the url;
const joinName=path.join(__dirname + "/views");
console.log(joinName);