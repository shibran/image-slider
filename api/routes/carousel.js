var express = require('express');
var router = express.Router();

const slides = [
  {
    image: 'https://source.unsplash.com/7XbxPUdRtgw', 
    title: 'The Moon',
    subTitle: 'by Carlos'
  },
  {
    image: 'https://source.unsplash.com/dF829P31kgA', 
    title: 'Dark mountain',
    subTitle: 'by Kushal'
  },
  {
    image: 'https://source.unsplash.com/W7EgqYJdQOE', 
    title: 'The canyon',
    subTitle: 'by Sven'
  },
  {
    image: 'https://source.unsplash.com/oP8GderL2HI', 
    title: 'Twilight zone',
    subTitle: 'by Kate'
  },
  {
    image: 'https://source.unsplash.com/Dw3APludDpE', 
    title: 'Lenticular sunrise',
    subTitle: 'by Marc'
  },
  {
    image: 'https://source.unsplash.com/ZxXrAo8nB5g', 
    title: 'Sweet moonrise',
    subTitle: 'by Nadiia'
  },
  {
    image: 'https://source.unsplash.com/nKtTubtxf6g', 
    title: 'Wooden dock',
    subTitle: 'by Claire'
  },
  {
    image: 'https://source.unsplash.com/in9-n0JwgZ0', 
    title: 'The lightning',
    subTitle: 'by Breno'
  },
  {
    image: 'https://source.unsplash.com/01_igFr7hd4', 
    title: 'Xinjiang',
    subTitle: 'by Meng'
  },
  {
    image: 'https://source.unsplash.com/OYFHT4X5isg', 
    title: 'Into the woods',
    subTitle: 'by Dan'
  },
]
    router.get('/', function(req, res, next) {
    res.json(slides);
});

module.exports = router;