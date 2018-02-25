module.exports = function(app, db) {
    app.get('/api/pdfJunk', function(req, res) {
        db.distributionrunfiles.findAll().then(function(result) {
            res.json(result);
        });
    });
    app.get('/api/pdfJunk/:id', (req, res) => {
        var id = req.params.id;
        db.distributionrunfiles.find({
                where: {
                    id: id
                },
                include: [{model: db.annotations} ]
            })
            .then(distributionrunfiles => {
                res.json(distributionrunfiles);
            });
    });
    app.post('/api/pfjunk/:id/annotations', function(req, res) {
        db.annotations.create({
          //@@@@@ TO DO  need to get this from client rather then hardcode
            reviewers_id: 129,
            distributionrunfiles_id: req.params.id,
            text: req.body.text,
            pagenumber: req.body.pagenumber,

        }).then(function(annot) {

            res.json(annot);

        });
    });
};
