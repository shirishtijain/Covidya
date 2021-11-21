const express = require("express");
const router = express.Router();

const {
    getResources,
    newResource,
    // getOxygenResources,
    // getPlasmaResources,
    // getBedResources,
    // getMedicineResources

} = require("../controllers/resourceController");

const { isAuthenticatedUser } = require('../middlewares/auth');

router.route('/resources').get(getResources);
router.route('/resource/new').post(isAuthenticatedUser, newResource);
// router.route('resources/oxygen').get(getOxygenResources);
// router.route('resources/plasma').get(getPlasmaResources);
// router.route('resources/bed').get(getBedResources);
// router.route('resources/medicine').get(getMedicineResources);
module.exports = router;