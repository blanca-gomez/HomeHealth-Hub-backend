const User = require ('../models/User.js')


const createUser = async (req,res) => {
    try{
        const product = await User.create(req.body);
        res.status(200).json(product)

    }catch (error){
        res.status(500).json({message : error.message})
    }
}

const getUserById = async (req,res) => {
    try{
        const {id} = req.params;
        const user = await User.findById(id);
        if(!user){
            return res.status(404).json({message : "User not found"})
        }
        res.status(200).json(user)
    }catch (error){
        next(error)
    }
}


const getAllUsers = async (req,res) => {
    try{
        const users = await User.find({});
        res.status(200).json(users)
    }catch (error){
        res.status(500).json({message : error.message})
    }
}

const updateUser = async (req,res) => {
    try{
        const {id} = req.params;
        const user= await User.findByIdAndUpdate(id, req.body);
        if(!user){
            return res.status(404).json({message : "User not found"})
        }
        const updateUser = await User.findById(id);
        res.status(200).json(updateUser)
    }
    catch(error){
        res.status(500).json({message : error.message})
    }
}

const deleteUser = async (req,res) => {
    try{
        const {id} = req.params;
        const user = await User.findByIdAndDelete(id);
        if(!user){
            return res.status(404).json({message : "User not found"})
        }
        res.status(200).json({message : "User delete successfully"})
    }
    catch(error){
        res.status(500).json({message : error.message})
    }
}

module.exports = {
    createUser,
    getAllUsers,
    updateUser,
    deleteUser,
    getUserById
}