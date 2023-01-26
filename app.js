import express from 'express';
import bodyParser from 'body-parser';
// commonjs modules does not work in es6 this is the syntax to ocuupy directory name
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PORT=3000;
let items=[];
const app=express();
app.set('view engine', 'ejs');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/',(req,res)=>{
    let date=new Date();
    const option={
        weekday: "long",
        month: "long",
        day: "numeric",
    }

    let day=date.toLocaleString('en-US',option)
    res.render('list', {kindofday: day,newItems:items});

})
app.post('/',(req,res)=>{
    items.push(req.body.newName)
    res.redirect('/');
})
app.listen(PORT,console.log(`The server has started on port ${PORT}`));