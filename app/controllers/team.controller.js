const Team = require('../models/team.model');

exports.create = (req, res) => {
    var team = new Team(req.body);

    team.save((err, task) => {
        if (err) {
            res.send(err);
        }

        res.json(team);
    });


    // if (!req.body.content) {
    //     return res.status(400).send({
    //         message: "Post values cannot empty."
    //     });
    // }

    // const team = new Team({
    //     name: req.body.name,
    //     origin: req.body.origin
    // });

    // team.save()
    //     .then (data => {
    //         res.send(data);
    //     }).catch(err => {
    //         return res.status(500).send({
    //             message: err.message || "Error occured when creating new Team."
    //         });
    //     });
};

exports.findOne = (req, res) => {
    var teamId = req.params.teamId;

    Team.findById(teamId)
        .then(team => {
            if (!team) {
                return res.status(400).send({
                    message: "No Team found with id" + teamId
                });
            }
            res.send(team);
        }).catch(err =>  {
            if (err.kind == 'ObjectId') {
                return res.status(404).send({
                    message: "No Team found with id" + teamId
                });
            }

            return res.status(500).send({
                message: "Error occured when get team data."
            });
        });
}

exports.findAll = (req, res) => {
    Team.find()
        .then(teams => {
            res.send(teams);
        }).catch(err => {
            return res.status(500).send({
                message: err.message || "Error occured when getting Team data."
            });
        });
}

exports.update = (req, res) => {
    if (!req.body.content) {
        return res.status(400).send({
            message: "post values cannot empty."
        });
    }

    //Find and update team 
    var teamId = req.params.teamId;

    Team.findByIdAndUpdate(teamId, {
        name: req.body.name,
        origin: req.body.origin
    }, { new: true })
        .then(team => {
            if (!team) {
                return res.status(400).send({
                    message: "Failed to update team with id " + teamId
                });
            }

            res.send(team);
        }).catch(err => {
            if (err.kind == 'ObjectId') {
                return res.status(404).send({
                    message: "No Team found with id" + teamId
                });
            }

            return res.status(500).send({
                message: "Error occured when get team data."
            });
        })

}

exports.delete = (req, res) => {
    Team.findOneAndRemove(req.params.teamId)
        .then(team => {
            if (!team) {
                return res.status(400).send({
                    message: "Failed to delete team with id " + teamId
                });
            }

            res.send({
                message: "Delete Team Success"
            });
        }).catch(err => {
            
        });

}