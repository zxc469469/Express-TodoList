// contactController.js
// Import contact model
Contact = require("./contactModel");
// Handle index actions
exports.index = function (req, res) {
  Contact.get(function (err, contacts) {
    if (err) {
      res.json({
        status: "error",
        message: err,
      });
    }
    res.json({
      status: "success",
      message: "Contacts retrieved successfully",
      data: contacts,
    });
  });
};
// Handle create contact actions
exports.new = function (req, res) {
  var contact = new Contact();
  console.log(contact);
  contact.name = req.body.name ? req.body.name : contact.name;
  contact.key = req.body.key;
  contact.finished = req.body.finished;
  // save the contact and check for errors
  contact.save(function (err) {
    // if (err)
    //     res.json(err);
    res.json({
      message: "New contact created!",
      data: contact,
    });
  });
};
// Handle view contact info
exports.view = function (req, res) {
  Contact.findById(req.params.contact_id, function (err, contact) {
    if (err) res.send(err);
    res.json({
      message: "Contact details loading..",
      data: contact,
    });
  });
};

// Handle update contact info
exports.update = function (req, res) {
  Contact.findById(req.params.contact_id, function (err, contact) {
    if (err) res.send(err);
    contact.name = req.body.name ? req.body.name : contact.name;
    contact.gender = req.body.gender;
    contact.email = req.body.email;
    contact.phone = req.body.phone;
    // save the contact and check for errors
    contact.save(function (err) {
      if (err) res.json(err);
      res.json({
        message: "Contact Info updated",
        data: contact,
      });
    });
  });
};
// Handle delete contact
exports.delete = function (req, res) {
    
  Contact.deleteOne(
    {
        key: req.params.key,
    },
    function (err, contact) {
      if (err) res.send(err);
      res.json({
        status: "success",
        message: "Contact deleted",
      });
    }
  );
};

exports.keyView = function (req, res) {
    console.log(req.params.key)
  var query = Contact.where({ key: req.params.key});
  query.findOne(function (err, contact) {
    if (err) res.send(err);
    res.json({
      message: "keyView..",
      data: contact,
    });
  });
};
