const { PrismaClient } = require('@prisma/client')
const bcrypt = require("bcryptjs");

const prisma = new PrismaClient()
exports.createProfile = async (req,res,next)=>{
  const userId = parseInt(req.params.id) 
      const profile = await prisma.profile.create({
          data: {
            bio: "Welcome to my profile",
            profilePicture: "example.jpeg",
            user: {
              connect: { id: userId }, 
            },
          },
        });   
        res.send(profile)
  }
exports.updateProfile =  async (req,res,next)=>{
  const userId = parseInt(req.params.id)
  const {bio,profilePicture} = req.body
  const updateProfile = await prisma.profile.update({
    where:{id:userId},
    data:{bio,profilePicture}
  })
  return res.send(updateProfile)
}
exports.deleteProfile = async (req,res,next)=>{
  const userId = parseInt(req.params.id)
    const deleteprofile = await prisma.profile.delete({
      where:{
        id:userId
    }
    })
    return res.send(deleteprofile)
}