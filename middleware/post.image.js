const multer = require('multer')
const moment = require('moment')

const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, 'images/post/')
    },
    filename(req, file, cb) {
        cb(null, moment().format('DDMMYYYY-HHmmss_SSS') + '_' + file.originalname)
    }
})

const types = ['image/jpeg', 'image/jpg', 'image/png']

const fileFilter = (req, file, cb) => {
    if (types.includes(file.mimetype)) {
        cb(null, true)
    } else {
        cb(null, false)
    }
}

module.exports = multer({storage, fileFilter})