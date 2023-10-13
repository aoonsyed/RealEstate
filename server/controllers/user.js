import mongoose from "mongoose"
import bcrypt from "bcrypt";
import User from "../models/user.js"
import serviceMessage from "../models/serviceMessage.js"
import packageMessage from "../models/packageMessage.js"

export const createUser = async (req, res) => {
    try {
        let userData = req.body
        const userFound = await User.find({ email: userData.email })
        if (userFound.length > 0) {
            res.status(200).json({ message: "User already Exists" })
        } else {
            const hash = bcrypt.hash(userData.password, 10, async (err, hash) => {
                if (err) {
                    console.log(err)
                } else {
                    userData = { ...userData, password: hash }
                    const user = new User(userData)
                    const data = await user.save()
                    res.status(201).json(data)
                }
            })
        }
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

export const getUser = async (req, res) => {
    const { email, password } = req.body
    try {
        const userFound = await User.find({ email: email })
        if (userFound.length > 0) {
            bcrypt.compare(password, userFound[0].password, (error, response) => {
                if (response) {
                    res.status(201).json(userFound[0])
                } else {
                    res.json({ message: "Incorrect Password" })
                }
            })
        } else {
            res.json({ message: "User Does not exist" })
        }
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const getService = async (req, res) => {
    try {
        const serviceMessages = await serviceMessage.find()

        res.status(200).json(serviceMessages)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const singleService = async (req, res) => {
    const { id } = req.params
    try {
        const serviceMessages = await serviceMessage.findById(id)
        res.status(200).json(serviceMessages)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}


export const updateService = async (req, res) => {
    const { id } = req.params
    const service = req.body

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json("no service found")

    try {
        const updatedService = await serviceMessage.findByIdAndUpdate(id, service, { new: true })
        res.json(updatedService)
    } catch (error) {
        console.log(error)
    }
}

export const deleteService = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json("no service found")

    try {
        await serviceMessage.findByIdAndRemove(id)
        res.json("Service Deleted Successfully")
    } catch (error) {
        console.log(error)
    }
}




export const getPackage = async (req, res) => {
    try {
        const packageMessages = await packageMessage.find().populate('servicesArr.service_id')

        res.status(200).json(packageMessages)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const singlePackage = async (req, res) => {
    const { id } = req.params
    try {
        const packageMessages = await packageMessage.findById(id)
        res.status(200).json(packageMessages)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const updatePackage = async (req, res) => {
    const { id } = req.params
    const newpackage = req.body

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json("no service found")

    try {
        const updatedPackage = await packageMessage.findByIdAndUpdate(id, newpackage, { new: true })
        res.json(updatedPackage)
    } catch (error) {
        console.log(error)
    }
}

export const createPackage = async (req, res) => {
    const packages = req.body

    const newPackages = new packageMessage(packages)


    try {
        await await newPackages.save()

        res.status(201).json(newPackages)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

export const deletePackage = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json("no service found")

    try {
        await packageMessage.findByIdAndRemove(id)
        res.json("Service Deleted Successfully")
    } catch (error) {
        console.log(error)
    }
}