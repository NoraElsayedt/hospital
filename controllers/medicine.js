const Medicines = require('../model/medicine')
const Users = require('../model/users') 
const {validationResult} = require('express-validator') 

exports.addMedicines  = async(req,res,next)=>
{
    try
    {
        const user = await Users.findById(req.params.userId)
        const errors = validationResult(req)
        if(!errors.isEmpty())
                {
                    return res.status(422).json({
                        errors:errors.array()
                    });
                }
        if(user.roles == 'doctor')
        {
            return res.json({message:'this Medicines arenot from doctor',status:422})  
        }
        const newMedicines = new Medicines({...req.body})
        await newMedicines.save()
        user.medicines.push(newMedicines)
        await user.save()
        return res.status(200).json({message:'ok add new Medicines',MedicinesId:newMedicines._id})
    }
    catch(error)
    {
        if(!error.statuscode)
        {
            error.statuscode = 500
        }
        next(error)
    }
} 


exports.getMedicinesUser = async(req,res,next)=>
{
    const userId = req.params.userId
    try
    {
        const spesficUser = await Users.findById(userId)
        .select('userName')
        .populate({
            path:'medicines',
            select:'content user',
          
        })
        if(!spesficUser)
        {
            return res.status(400).json({message:'validation error '})
        }
        return res.status(200).json(spesficUser)
    }
    catch(err)
    {
        if(!err.statuscode)
            {
                err.statuscode = 500
            }
            next(err)
    }
}

exports.deleteMedicinesUser= async(req,res,next)=>
{
    const MedicineId = req.params.MedicineId
    try
    {
        await Medicines.findByIdAndRemove(MedicineId)
        return res.status(200).json({message:'ok delete Medicine'})
    }
    catch(error)
    {
        if(!error.statuscode)
        {
            error.statuscode = 500
        }
        next(error)
    }
}

