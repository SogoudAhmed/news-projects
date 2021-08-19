
const request = require('request')
const news = (title, description,urlToImage, callback) => {
    const url = "https://newsapi.org/v2/top-headlines?country=eg&category=business&apiKey=0c8558be58db410280cc68682d853ec0" + title +" "+ description+" "+urlToImage
    request({ url,json: true}, (error, response) => {
        if (error) {
            callback('no internet connection', undefined)
        } else if (response.body.error) {
            callback('not found', undefined)
        }
        else{
            callback(undefined,{
                urlToImag: response.body.articles.urlToImag,
                title: response.body.articles.title,
                description:response.body.articles.description
            })
        }
    
    })
}
module.exports = news
