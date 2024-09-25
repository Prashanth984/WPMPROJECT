// app_server/controllers/others.js

module.exports.about = function(req, res) {
    res.render('generic-text', { title: 'About' }); // Render the 'generic-text' template with a title
};
