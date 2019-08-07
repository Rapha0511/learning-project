module.exports = (connection, ORM)=>{
const Message = connection.define("message",{
    id:{
        type:ORM.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },

    firstName:{
        type: ORM.TEXT,
        allowNull: false,
    },

    lastName:{
        type:ORM.TEXT,
        allowNull:false,
    },

    email:{
        type:ORM.TEXT,
        allowNull:false,
    },

    subject:{
        type:ORM.TEXT,
        allowNull: false,
    },
    time:{
        type:ORM.TEXT,
        allowNull:false,
    }

},{ freezTableName:true});

const User = connection.define("user",{

    id:{
        type:ORM.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },

    email:{
        type:ORM.TEXT,
        allowNull:false
    },

    passwordHash:{
        type:ORM.TEXT,
        allowNull:false,
    }


},{freezTableName:true})

return {Message,User} 
};