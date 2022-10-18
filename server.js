const express = require('express')
const app = express()

const Flickr = require('flickr-sdk')

app.get('/rivers', (req, res) => {
    res.setHeader(
        'Access-Control-Allow-Origin',
        '*'
    )
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    )
    const getFlickrPhotos = async () => {
    const flickr = new Flickr('57024ec69177dc3efff9fb4f22635635')
    flickr.photos.search({
        tags: 'river'
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

app.get('/forests', (req, res) => {
    res.setHeader(
        'Access-Control-Allow-Origin',
        '*'
    )
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    )
    const getFlickrPhotos = async () => {
    const flickr = new Flickr('57024ec69177dc3efff9fb4f22635635')
    flickr.photos.search({
        tags: 'forest'
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

app.get('/mountains', (req, res) => {
    res.setHeader(
        'Access-Control-Allow-Origin',
        '*'
    )
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    )
    const getFlickrPhotos = async () => {
    const flickr = new Flickr('57024ec69177dc3efff9fb4f22635635')
    flickr.photos.search({
        tags: 'mountain'
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

app.listen(3000)