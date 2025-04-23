// import fs module for use

const fs= require('fs');

// for write file
// fs.writeFile('filenamewith extention' , 'text or anything' , error callback)
fs.writeFile('demo1.txt',"This is sample text",(err)=>{
    if(err)
        console.log("error");
    else
        console.log("successful");
})


// append file purber document sothik rekhe new text add kore override kore na
fs.appendFile('demo1.txt',"This is sample text1",(err)=>{
    if(err)
        console.log("error");
    else
        console.log("successful");
})

// read file process
// fs.readFile('filename','encoding system',(error call back)); encoding system='utf-8'

fs.readFile('demo1.txt','utf-8',(err,data)=>{
    if(err)
        console.log("error");
    else    
        console.log(data);
})


// for rename
// fs.rename('previous name','new Name',error call back);
fs.rename('demo1.txt','demo.txt',(err)=>{
    if(err)
        console.log(err);
    else
        console.log("Successfully reanamed");
})


// for delete
// fs.unlink('file name',eror callback)
fs.unlink('demo.txt',(err)=>{
    if(err)
        console.log("err");
    else
        console.log("Successfully deleted");
})
