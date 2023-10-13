import Post from "../models/post.js"

export const createPost = async (req, res) => {
    try {
        let postData = req.body
        const user = new Post(postData)
        const data = await user.save()
        res.status(201).json(data)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

export const getPost = async (req, res) => {
    const { user } = req.body
    try {
        const postFound = await Post.find({ user: user })
        res.status(201).json(postFound)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}