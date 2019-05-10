const fs = require('fs');

fs.writeFile('./texto.txt', 'first line test', function(err){
   
   if (err){
    console.log(err);
   }
   console.log('file created');

});

console.log('this is last line of code but nodejs does not wait to the OS');

