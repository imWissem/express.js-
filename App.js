const express= require('express');
const app=express()
const Port= 3000
const path=require('path')
const date = new Date();
const day=date.getDay()
const hour=date.getHours()


app.use(express.static('public'))

app.use((req, res, next) => {
   if (day >= 1 && day <= 5 && hour >= 9 && hour < 17) {
     next();
   } else {  
         res.sendFile(__dirname + '/public/timeover.html')
   }
 });


app.get('/', (req,res)=>{
   res.sendFile(__dirname + "/public/home.html")
})

app.get('/contact',(req,res)=>{
   res.sendFile(__dirname + '/public/contact.html')
})

app.get('/service',(req,res)=>{
   res.sendFile(__dirname + '/public/service.html')
})  
 

app.listen(Port, ()=>{ console.log(`localhos : ${Port}`)})