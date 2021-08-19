const express =require('express')
const app =express()
const port=3000
const path=require('path')
const publicDirectory =path.join(__dirname,'../public')
app.use(express.static(publicDirectory))
app.set('view engine','hbs');
const viewspath =path.join(__dirname,'../templete/views')

const hbs = require('hbs')
const pathPartiales = path.join(__dirname,'../templates/partials')
hbs.registerPartials(pathPartiales)


app.set('views',viewspath)
const news =require('./tools/news')
app.get('/news',(req,res)=>{
    if(!req.query.address){
          return res.send({error:'you must provide address'})
        }
        news(req.query.address,(error,data)=>{
          if(error){
            return res.send({error})
          }
            res.send({
                articles:data.articles,
            })
          })
        })
   
  app.listen(port, () => {
    console.log('server is running')
  })
