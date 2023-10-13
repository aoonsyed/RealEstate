import express from "express";
import { createUser, getUser } from "../controllers/user.js";
import { createPost, getPost } from "../controllers/post.js";

const router = express.Router();


router.post('/createUser', createUser)
router.post('/getUser', getUser)
router.post('/createPost', createPost)
router.post('/getPost', getPost)
// router.get('/service', getService)
// router.get('/service/:id', singleService)
// router.delete('/service/:id', deleteService)
// router.patch('/service/:id', updateService)

// router.get('/package', getPackage)
// router.get('/package/:id', singlePackage)
// router.post('/package', createPackage)
// router.patch('/package/:id', updatePackage)
// router.delete('/package/:id', deletePackage)


export default router   