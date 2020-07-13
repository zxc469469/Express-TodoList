var express = require("express");
var router = express.Router();
var contactController = require('../model/contactController');

router.get("/", function(req, res, next) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!'
    });
});


// Contact routes
router.route('/contacts')
    .get(contactController.index)
    .post(contactController.new);
router.route('/contacts/:contact_id')
    .get(contactController.view)
    .patch(contactController.update)
    .put(contactController.update)
    .delete(contactController.delete);
router.route('/key')
    .get(contactController.index)
    .post(contactController.new);
router.route('/key/:key')
    .get(contactController.keyView)
    .patch(contactController.update)
    .put(contactController.update)
    .delete(contactController.delete);

module.exports = router;
