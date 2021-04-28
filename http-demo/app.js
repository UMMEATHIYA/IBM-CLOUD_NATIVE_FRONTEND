const express=require('express');
const app=express();
app.get('/',function (request,response){
    return response.send('hello world express');
});

app.listen(3000,function (){
    console.log('server listening on port 3000 ');
});
