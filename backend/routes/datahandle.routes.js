const router = require("express").Router();
const update_data = require("../controllers/updateData.controller")
const get_data = require('../controllers/show.controller')
const show_data = require('../controllers/show.controller')

router.use('/abhishek', update_data)
router.use('/abhishek', get_data)
router.use('/abhishek', show_data)

module.exports = router;