const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const multer = require('multer');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;




const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname+'.'+'png')
    }
});

const upload = multer({ storage: storage, limits:{
  filesize: 1024*1024*10
} });


const moveFile = require('move-file');


app.post('/upload_image', upload.single('imagedata'), function (req, res, next) {


 (async () => {
     await moveFile('./uploads/imagedata.png', '../src/components/imagedata.png');
 })();

  })


app.use(cors());
app.use('/uploads',express.static('uploads'));

// app.use(express.json());
app.use(express.json({limit: '50mb'}));
// app.use(express.urlencoded({limit: '50mb'}))

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const exercisesRouter = require('./routes/exe');
const usersRouter = require('./routes/users');
const imageRouter = require('./routes/image');

app.use('/exercises', exercisesRouter);
app.use('/image', imageRouter);
app.use('/users', usersRouter);




app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
