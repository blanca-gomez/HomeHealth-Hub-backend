const User = require ('../models/User.js')



const getUserProfile = async (req,res) => {
    try{
        const user = await User.findById(req.userId);
        if(!user){
            return res.status(404).json({message : "User not found"})
        }
        res.status(200).json(user)
    }catch(error){
        res.status(500).json({message : error.message})
    }
}



const updateUserProfile = async (req,res) => {
    try{
        const updateUser= await User.findByIdAndUpdate(req.userId, req.body, {new:true});
        if(!updateUser){
            return res.status(404).json({message : "User not found"})
        }
        res.status(200).json(updateUser)
    }
    catch(error){
        res.status(500).json({message : error.message})
    }
}

const deleteUserProfile = async (req,res) => {
    try{
        const deleteUser = await User.findByIdAndDelete(req.userId);
        if(!deleteUser){
            return res.status(404).json({message : "User not found"})
        }
        res.status(200).json({message : "User delete successfully"})
    }
    catch(error){
        res.status(500).json({message : error.message})
    }
}

module.exports = {
    getUserProfile,
    updateUserProfile,
    deleteUserProfile,
}