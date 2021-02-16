const router = require('express').Router();
const multer = require('multer');

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'uploads')
//     },
//     filename: (req, file, cb) => {
//         cb(null, file.fieldname + '-' + Date.now())
//     }
// });
//
// const upload = multer({ storage: storage, limits:{
//   filesize: 1024*1024*10
// } });

let image = require('../models/image.model');

router.route('/').get((req, res) => {
  image.find()
    .then(images => res.json(images))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const image_data = req.body.image_data;
  const exif = req.body.exif;
  const newData = new image({image_data, exif,});

  newData.save()
    .then(() => res.json('Image added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
