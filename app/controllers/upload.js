__dirname = './'

const uploadedFile = (req, res) => {
    const {image} = req.files
    image.mv(__dirname + '/img/' + Date.now() + image.name)
  
    res.status(200).send('Image uploaded succesfully')
  }

  module.exports = {uploadedFile}