const calculateHash = require('./hash')


module.exports = {

    

    users: [

        {email: 'nik@nik.nik', passwordHash: calculateHash('guest')},
        {email: 'raphael@raphael.nik', passwordHash:calculateHash ('guest')},
        {email: 'putain@nik.nik', passwordHash:calculateHash ('guest')},
        {email: 'avi@nik.nik', passwordHash:calculateHash ('guest')},

    ],

}