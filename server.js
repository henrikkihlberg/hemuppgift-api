const express = require('express')
const app = express()
require('dotenv').config()

const Flickr = require('flickr-sdk')

const fetchImages = () => {
    var flickrData = [
        {param: '/rivers', tags: 'river'},
        {param: '/forests', tags: 'forest'},
        {param: '/mountains', tags: 'mountain'},
        {param: '/nature', tags: 'nature'}
    ]
    flickrData.forEach((info) => {
        app.get(info.param, (req, res) => {
            res.setHeader(
                'Access-Control-Allow-Origin',
                '*'
            )
            res.header(
                'Access-Control-Allow-Headers',
                'Origin, X-Requested-With, Content-Type, Accept'
            )
            const getFlickrPhotos = async () => {
            const flickr = new Flickr(process.env.FLICKR_API_KEY)
            flickr.photos.search({
                tags: info.tags
            }).then(function (response) {
                console.log('Success!', response.body)
                const images = response.body
                res.send(images)
            }).catch(function (err) {
                console.error('Error!', err)
            })
            }
            getFlickrPhotos()
        })
    })
}
fetchImages()



// app.get('/forests', (req, res) => {
//     res.setHeader(
//         'Access-Control-Allow-Origin',
//         '*'
//     )
//     res.header(
//         'Access-Control-Allow-Headers',
//         'Origin, X-Requested-With, Content-Type, Accept'
//     )
//     const getFlickrPhotos = async () => {
//     const flickr = new Flickr(process.env.FLICKR_API_KEY)
//     flickr.photos.search({
//         tags: 'forest'
//     }).then(function (response) {
//         console.log('Success!', response.body)
//         const images = response.body
//         res.send(images)
//     }).catch(function (err) {
//         console.error('Error!', err)
//     })
//     }
//     getFlickrPhotos()
// })

// app.get('/mountains', (req, res) => {
//     res.setHeader(
//         'Access-Control-Allow-Origin',
//         '*'
//     )
//     res.header(
//         'Access-Control-Allow-Headers',
//         'Origin, X-Requested-With, Content-Type, Accept'
//     )
//     const getFlickrPhotos = async () => {
//     const flickr = new Flickr(process.env.FLICKR_API_KEY)
//     flickr.photos.search({
//         tags: 'mountain'
//     }).then(function (response) {
//         console.log('Success!', response.body)
//         const images = response.body
//         res.send(images)
//     }).catch(function (err) {
//         console.error('Error!', err)
//     })
//     }
//     getFlickrPhotos()
// })

// app.get('/nature', (req, res) => {
//     res.setHeader(
//         'Access-Control-Allow-Origin',
//         '*'
//     )
//     res.header(
//         'Access-Control-Allow-Headers',
//         'Origin, X-Requested-With, Content-Type, Accept'
//     )
//     const getFlickrPhotos = async () => {
//     const flickr = new Flickr(process.env.FLICKR_API_KEY)
//     flickr.photos.search({
//         tags: 'nature'
//     }).then(function (response) {
//         console.log('Success!', response.body)
//         const images = response.body
//         res.send(images)
//     }).catch(function (err) {
//         console.error('Error!', err)
//     })
//     }
//     getFlickrPhotos()
// })

app.listen(8080)