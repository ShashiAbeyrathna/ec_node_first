const db = require('../models');
const Role = db.role;



exports.getAllRoles = (req, res) => {
    
    Role.findAll()
    .then(data => {
        if(data.length != 0){
            res.status(200).send(data);
        }else{ 
            res.status(401).send("empty Role");
        }
    })

    .catch(err=>{
        console.log(err)
        res.status(500).send(
            {
                message: err.message || 'Not Found'
            }
        );
    });
}

exports.createRole = async (req, res) => {
    const role = {
        role_name: req.body.role_name,
        status: req.body.status,
    }
    await Role.create(role)
        .then(data => {
            if (data.length != 0) {
                res.status(200).send(data);
            } else {
                res.status(404);
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).send(
                {
                    message: err.message || 'Not Found'
                }
            );
        });

    
}


exports.updateRole = async (req, res) => {
    const role = {
        role_name: req.body.role_name,
        status: req.body.status,
    }
    await Role.update(
        role, {
        where: { id: req.body.id, }})
        .then(data => {
            if (data.length != 0) {
                res.status(200).send(data);
            } else {
                res.status(404);
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).send(
                {
                    message: err.message || 'Not Found'
                }
            );
        });

}


exports.getSingleRole = (req, res) => {
    const id = req.params.id;

    Role.findByPk(id)
        .then(data => {
            if (data.length != 0) {
                res.status(200).send(data);
            } else {
                res.status(404);
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).send(
                {
                    message: err.message || 'Not Found'
                }
            );
        });

    
}

exports.deleteRole = (req, res) => {
    //res.status(200).send('Delete  Success')
    Role.destroy({
        truncate: true
      }).then(() => {
        return res.status(200).json({
            success: true,
            "message": "All Roles deleted"
        })
      }).catch(err => {
          return res.status(400).json({
              err
          })
      })
    
}