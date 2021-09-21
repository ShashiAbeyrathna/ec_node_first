const db = require('../models');
const User = db.user;


//select all users
exports.getAllUsers = (req, res) => {
    //console.log('req');
    //res.status(200).send('ok');
    
    User.findAll()
    .then(data => {
        if(data.length != 0){
            res.status(200).send(data);
        }else{ 
            res.status(401).send("empty User");
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

exports.createUser = async (req, res) => {
    const user = {
        user_name: req.body.user_name,
        password: req.body.password,
        status: req.body.status,
    }
    await User.create(user)
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


exports.updateUser = async (req, res) => {
    const user = {
        user_name: req.body.user_name,
        password: req.body.password,
        status: req.body.status,
    }
    await User.update(
        user, {
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

//select single user
exports.getSingleUser = (req, res) => {
    const id = req.params.id;

    User.findByPk(id)
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

exports.deleteUser = (req, res) => {
    //res.status(200).send('Delete  Success')
    User.destroy({
        truncate: true
      }).then(() => {
        return res.status(200).json({
            success: true,
            "message": "All Users deleted"
        })
      }).catch(err => {
          return res.status(400).json({
              err
          })
      })
    
}