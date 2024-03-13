import User from  "../model/userModel.js";

export const create = async(req ,res) =>
{

    try{

        const userData = new User(req.body);

        if(!userData)

        {
        return res.status(404).json({msg:"User data not found"})
        }

const savedata = await userData.save();
res.status(200).json(savedata);
}
    catch(error)
    {
        res.status(500).json({error:error})
    }
}


export const getAll = async(req ,res) =>
{

    try{

        const userData = await User.find();
        console.log("idd--------------------"+ userData);
        if(!userData)

        {
        return res.status(404).json({msg:"User data not found"})
        }


res.status(200).json(userData);
}
    catch(error)
    {
        res.status(500).json({error:error})
    }
}


export const getOne = async(req ,res) =>
{

    try{

        const eid = req.params.id;

        console.log("idd--dd-"+ eid);
        const userExit = await User.findById(eid);
        console.log("usee---"+userExit);

        if(!userExit)

        {
        return res.status(404).json({msg:"User data not found"})
        }


res.status(200).json(userExit);
}
catch(error)
{
        res.status(500).json({error:error})
    }
}

export const update = async(req ,res) =>
{

    try{

        const id = req.params.id;

        console.log("idd---"+id);
        const userExit = await User.findById(id);
        console.log("usee---"+userExit);

        if(!userExit)

        {
        return res.status(404).json({msg:"User data not found"})
        }

        const updateData = await User.findByIdAndUpdate(id,req.body,{new : true});

        res.status(200).json({msg:"User delete sucess"});
}
catch(error)
{
        res.status(500).json({error:error})
    }
}



export const userdelete = async(req ,res) =>
{

    try{

        const id = req.params.id;

        console.log("idd---"+id);
        const userExit = await User.findById(id);
        console.log("usee---"+userExit);

        if(!userExit)

        {
        return res.status(404).json({msg:"User data not found"})
        }

        await User.findByIdAndDelete(id);



res.status(200).json({msg:"User delete sucess"});
}
catch(error)
{
        res.status(500).json({error:error})
    }
}
