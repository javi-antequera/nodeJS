let fs=require("fs");
console.log("\n Abriendo archivo:");

let content = fs.readFile("archivo.txt","utf8", function(error,content){
    console.log(content);
});

console.log("\n Haciendo otra cosa");