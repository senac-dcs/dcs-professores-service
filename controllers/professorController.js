let Professor = require('../models/professorModel');

exports.getAll = function (req, res) {
    Professor.find(function (err, professores) {
        if(err){
            res.status(500);
            res.send("Internal Server Error");
        }
        else{
            res.status(200);
            res.send(professores);
        }
    });
};

exports.add = function(req, res) {
    var professor = new Professor();
    professor.registration = req.body.registration;
    professor.name = req.body.name ? req.body.name : professor.name;
    professor.email = req.body.email;
    professor.telephone = req.body.telephone;
    professor.birth_date = req.body.birth_date;
    professor.address = req.body.address;

    professor.save(function(err) {
        if (err) {
            res.status(500);
            res.send('Erro : failed to add teacher...');
        }
        else {
            res.status(201);
            res.send(professor);
        }
    });
};

exports.getById = function(req, res){
    Professor.findById(req.params.id, function(err, professor){
        if (err) {
            res.status(404);
            res.send("Teacher not found...");
        }
        else {
            res.status(200);
            res.send(professor);
        }
    });
};

exports.update = function(req, res){
   Professor.findById(req.params.id, function (err, professor) {
       if(err){
           res.status(404);
           res.send("Teacher not found...")
       }
       else{
        professor.registration = req.body.registration;
        professor.name = req.body.name ? req.body.name : professor.name;
        professor.email = req.body.email;
        professor.telephone = req.body.telephone;
        professor.birth_date = req.body.birth_date;
        professor.address = req.body.address;

        professor.save(function (err){
            if(!err) {
                res.status(200);
                res.send(professor)
            }
            else {
                res.status(500);
                ses.send("Failed to update teacher.")
            }
        })
       }
   });
};

exports.delete = function(req, res) {
    Professor.findById(req.params.id, function (err, professor) {
        professor.remove(function (err) {
            if(!err){
                res.status(204);
                res.send("Deleted Teacher...");
            }
        });
    })
};