const { PrismaClient } = require('@prisma/client')
const bcrypt = require("bcryptjs");

const prisma = new PrismaClient()
exports.createUserGet = async (req,res,next) =>{
    const allUsers = await prisma.user.findMany()
    res.send(allUsers)
}
exports.createUserPost = async (req,res,next)=>{
    const { email, name, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);


    const user = await prisma.user.create({
        data:{
            email,
            name,
            password:hashedPassword,
            profile:{
                create:{
                    bio:"My Bio!",
                    profilePicture:"defaultprofile.jpeg"
                }
            }
        }
        
    })

    return res.send(user)
}
exports.updateUserPost = async(req,res,next)=>{
    const paramsId = parseInt(req.params.id)
    const {name,email} = req.body

    const updateUser = await prisma.user.update({
        where: {id:paramsId},
        data:{name,email}
    })
    return res.send(updateUser)
}
exports.deleteUserPost =  async (req,res,next)=>{
    const paramsId = req.params.id
    const deleteUser = await prisma.user.delete({
        where:{
            id:paramsId
        }
    })
    return res.send(deleteUser)
}