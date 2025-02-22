const { PrismaClient } = require('@prisma/client')
const bcrypt = require("bcryptjs");

const prisma = new PrismaClient()

exports.createPost = async (req,res,next)=>{
    const {title,content,isPublished} = req.body
    const authorid = req.params.id
    const post = await prisma.post.create({
        data:{
            title,content,isPublished,
            author:{connect:{id:authorid}}
        }
    });
    res.send(post)            
}

exports.updatePost = async (req,res,next)=>{
 
    const {title,content} = req.body
    const postid = req.params.id
    const post = await prisma.post.create({
        where:{id:postid},

        data:{
            title,content,
        
        }

    })
    res.send(post)
}
exports.deletePost = async (req,res,next)=>{
    const postId = parseInt(req.params.id)
      const deleteprofile = await prisma.profile.delete({
        where:{
          id:postId
      }
      })
      return res.send(deleteprofile)
  }