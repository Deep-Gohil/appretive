const Comments = require("../models/Comments.model");

const addComment = async (req, res) => {
    try {
        const createdBy = req.user.id;
        const { blog } = req.params;
        const text = req.body;
    
        if (!text) {
            return res.status(400).json({ message: "Please enter any comment", success: false });
        }
    
        const comments = await Comments.create({
            text: text,
            createdBy: createdBy,
            blog: blog
        });

        return res.status(201).json({message:"Comment Added!",success:true,comments});
    } catch (error) {
        return res.status(400).json({message:error.message,success:false});
    }
}

const getAllComments = async(req,res)=>{
    const comments = await Comments.find();
    return res.status(200).json({message:"All comments fetched successfully",success:true,comments})
}