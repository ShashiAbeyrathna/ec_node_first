const db = require('../models');
const Userdetails = db.userdetails;


exports.getAllUserdetails = (req, res) => {
    //console.log('req');
    //res.status(200).send('ok');
    
    Userdetails.findAll()
    .then(data => {
        if(data.length != 0){
            res.status(200).send(data);
        }else{ 
            res.status(401).send("empty User Details");
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

exports.createUserdetails = async (req, res) => {
    const  userdetails= {
        name_en: req.body.name_en,
        name_si: req.body.name_si,
        name_ta: req.body.name_ta,
        dob: req.body.dob,
        salary: req.body.salary,
        special_req: req.body.special_req,
    }
    await Userdetails.create(userdetails)
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


exports.updateUserdetails = async (req, res) => {
    const userdetails = {
        name_en: req.body.name_en,
        name_si: req.body.name_si,
        name_ta: req.body.name_ta,
        dob: req.body.dob,
        salary: req.body.salary,
        special_req: req.body.special_req,
    }
    await Userdetails.update(
        userdetails, {
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


exports.getSingleUserdetails = (req, res) => {
    const id = req.params.id;

    Userdetails.findByPk(id)
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

exports.deleteUserdetails = (req, res) => {
    Userdetails.destroy({
        truncate: true
      }).then(() => {
        return res.status(200).json({
            success: true,
            "message": "All User Details deleted"
        })
      }).catch(err => {
          return res.status(400).json({
              err
          })
      })
    
}