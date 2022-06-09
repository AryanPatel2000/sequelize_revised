const {Sequelize,Op } = require('sequelize')

const sequelize = require('../config/db.config')

    const Emp = sequelize.define('emp', {
        id : {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: Sequelize.STRING,
            allowNull : false,
            unique:true ,
            validate: {
                notNull: {
                    msg: 'an email is required'
                },
               
                isEmail: {
                    msg: 'Please use the correct email format : user@example.com'
                },
                notEmpty: {
                    msg: 'Please Provide a email'
                },
            },
            

        },
        firstName: {
            type: Sequelize.STRING,
            allowNull : false,
            validate: {
                notNull: {
                    msg: 'firstName is Required',
                },
                notEmpty: {
                    msg: 'Please provide a your nmame'
                },
            }
        },
        lastName: {
            type: Sequelize.STRING,
            allowNull : false,
            validate: {
                notNull: {
                    msg: 'lastName is Required',
                },
                notEmpty: {
                    msg: 'Please provide a your lastName'
                },
            }
        },
        city: {
            type: Sequelize.STRING,
            allowNull : false
        }
    }, {
        freezeTableName: true,
        timestamps: false
    })




   Emp.sync({alter:true})

    // Insert Data
    // Emp.create(
    //     {
    //         email: 'asd@gmail.com',
    //         firstName: 'asd',
    //         lastName: 'mehta',
    //         city: 'bhavnagar'
    //     }
    // )
    // .then((res) => {
    // console.log(JSON.stringify(res, null, 2));
    //  }).catch( (err) => { console.log(err)} )

    const insert = Emp.build({
        email: 'kapil@gmail.com',
        firstName: 'kapil',
        lastName: 'sharma',
        city: 'surat'
    })
    insert.save()
     console.log(insert.toJSON());
     //console.log(JSON.stringify(insert, null, 2));
    // console.log('Data Added in database')

    //select data
    //  Emp.findAll({
    //         attributes: ['id','firstName','lastName','city',],

    //     }).then((res) => {
    //        console.log(JSON.stringify(res, null, 2));
    //     }).catch( (err) => { console.log(err)} )

    //where clause
    // Emp.findAll({
    // where: {
    //     city:'rajkot'
    // },
    // }).then((res) => {
    // console.log(JSON.stringify(res, null, 2));
    // }).catch( (err) => { console.log(err)} )


    // Emp.findAll({
    //     where: {
    //         id: {
    //             [Op.lt]: 5
    //         }
    //     }
    // }).then((res) => {
    //      console.log(JSON.stringify(res, null, 2));
    //      }).catch( (err) => { console.log(err)} )


    //Operator

   Emp.findAll({
    // where: {
    //     [Op.or] :[{city:'surat'},{city:'baroda'}]

    // },
    // where: {
    //     [Op.and] :[
    //         {id: 1},
    //         {city: 'surat'}
    //     ]
    // },
    // where: {
    //     id:{ [Op.in] : [1,3,6]}
    // },

    // where: {
    //     id:{ [Op.gt] : [5]}
    // },
    //  where: {
    //     id:{ [Op.eq] : [5]}
    // },
    //  where: {
    //     city:{ [Op.like] : 's%'}
    // },

    }).then((res) => {
       // console.log(JSON.stringify(res, null, 2));

    }).catch( (err) => { console.log(err)} )

//Update

    // Emp.update({email :'raghav@gmail.com', firstName: 'raghav', lastName:'patil'}, {
    //     where: {id:3}
    // })
    // .then(() => {
    //     console.log('Employee updated');

    // }).catch( (err) => { console.log(err)} )


    //delete
    // Emp.destroy({
    //     where: {
    //         firstName: 'manoj'
    //     }
    // })
    // .then(() => {
    //     console.log('Employee deleted');

    // }).catch( (err) => { console.log(err)} )

    //for truncate table
    // Emp.destroy({
    //     truncate: true
    // })

    //insert in bulk
    Emp.bulkCreate([
       // {email: 'madhav@email.com', firstName:'madhav', lastName:'agraval', city:'rajkot'},
        //{email: 'kishan@email.com', firstName:'kishan', lastName:'ahuja', city:'bhavnagar'},

    ], {validate: true})
    .then( (res) => {
         //console.log(JSON.stringify(res, null, 2));
         //console.log("Users data have been saved")
            })
        .catch( (err) => {console.log(err)})

    //Ordering

    Emp.findAll({
        // order: [
        //     ['id', 'desc'],
        // ]

        order: [
            ['city', 'desc']
        ]
    })
   .then( (res) => {
      // console.log(JSON.stringify(res, null, 2))
   })
   .catch( err => {console.log(err)});


    //grouping

    Emp.findAll({
        group:'city' ,
    })
    .then( (res) => {
             //  console.log(JSON.stringify(res, null, 2))
           })
    .catch( err => {console.log(err)});


    //Limits and pagination
    Emp.findAll({limit:5})
    .then( (res) => {
         //console.log(JSON.stringify(res, null, 2))
      })
    .catch( err => {console.log(err)});

      Emp.findAll({offset:8})
      .then( (res) => {
            //console.log(JSON.stringify(res, null, 2))
      })
    .catch( err => {console.log(err)});

    Emp.findAll({offset:5, limit:5})
    .then( (res) => {
      // console.log(JSON.stringify(res, null, 2))
    })
    .catch( err => {console.log(err)});

    //findByPk

    //  Emp.findByPk(50)
    // .then( (res) => {
    //     if(res == null)
    //     {
    //         console.log('Not found')
    //     }else{
    //         console.log(JSON.stringify(res, null, 2))

    //     }

    //   })
    //   .catch( err => {console.log(err)});


    //findOrCreate

    // Emp.findOrCreate({
    //         where:{firstName:'dhamal'},
    //         defaults: {

    //             email:'saurav@gmail.com',
    //             firstName: 'saurav',
    //             lastName: 'ganguly',
    //             city:'mumbai',
    //         }


    // }).then(([user, created]) => {
    //     console.log(JSON.stringify(user, null, 2));
    //     if(created){}
    //     console.log(created)
    // })


    //findOrCountAll

    // Emp.findAndCountAll({
    //     where: {
    //         city: {
    //             [Op.like] : 'surat'
    //         }
    //     },
    //     offset: 3,
    //     limit: 1
    // })
    // .then( (res) => {
    //      console.log(JSON.stringify(res, null, 2))
    //   })
    //   .catch( err => {console.log(err)});

