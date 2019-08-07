const express = require('express');
const app = express();
const port = process.env.port || 4000;
const jwt = require('jsonwebtoken');
const calculateHash = require('./hash.js');

const ORM = require('sequelize');
const connectionString = process.env.DATABASE_URL || 'postgres://watch:guest@localhost:5432/watch';
const connection = new ORM (connectionString,{logging:false})

const models = require('./Models.js');
const {Message,User} = models(connection,ORM);
const fakeUser = require('./fakeUser.js')



app.use( express.json());

const auth = (req, res, next)=>{  // next is what get u to req res
  const authHeader = req.get('Authorization') || '';  // reading the  value out of the header

  const token = authHeader.split(' ')[1]; //string after the space (ex: Bearer RGDTHDTHDHCCG)

  jwt.verify(token, 'jwt secret code', (err, decoded)=>{  // verify if the token is correct by decoding it with the secret code
    if( err ) return res.status(401).json({ message: 'auth failed' }); // if there is an error it means the token is unvalid we send back a 401
    else {
      req.session = decoded; // save the decoded json with the id
      next(); //next will go to req res
    }
  });
};

connection.authenticate()
  .then(()=> console.log('success'))
  .catch((err)=> console.error(err));


app.get('/hydrate',(req,res)=>{
    User.sync({force:true})
        .then(()=>User.bulkCreate(fakeUser.users))
        .then(()=>Message.sync({force:true}))
        .then(()=>res.json({message: 'success to create table cunt'}))
        .catch(err => console.error(err)||res.status(500).json({message :'nique ta mere'}));
});

app.get('/message',(req,res)=>{
    Message.findAll()
      .then(message =>res.json(message))
      .catch(err => res.status(500).json({err}))
})

app.post('/message',auth,(req,res)=>{
    Message.create(req.body)
        .then((response)=>res.status(201).json({created: response.dataValues, message:'object created'}))
        .catch(err=>console.error(err)||res.status(500).json({message: 'failed to create your object'}))

})

app.delete('/message/:id',(req,res)=>{
  Message.findByPk(1*req.params.id)
    .then(()=>Message.destroy({
      where:{id: 1*req.params.id},
    }))
    .then(()=>res.json({message:'message supprimer numero'+req.params.id}))
    .catch(err=>console.log(err)||res.status(404).json({message: err}))
})

app.post('/login',(req,res)=>{
  const passwordHash = calculateHash(req.body.password) // call the fuction and callculate the password
  User.findOne({where:{email:req.body.email,passwordHash}}) //look for  the user with an email and password
      .then(userResponse=>{
          if (userResponse){ // if we found the user with the mail and password
              jwt.sign( // turn json into an encoded shit no one can fucked
                  { id: userResponse.dataValues.id}, // id of the user we found
                  'jwt secret code', // need a secret code to encode
                  (err,token)=>res.json({token}) // send back  some json with the taken
              );

          }else{
              res.status(401).json({message : 'login failed '}); // 401 with no token if we did not find a user

          }
      });

})

app.listen(port,()=>console.log(`listening on port`+port));