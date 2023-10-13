import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const UserPosts = () => {
    const { user } = useSelector(state => state.user)
    const [userPosts, setUserPosts] = useState()

    useEffect(() => {
        if (user) {
            getUserPosts()
        }
    }, [])

    const getUserPosts = async () => {
        console.log(user?._id)
        const { data } = await axios.post("http://localhost:9000/getPost", { user: user?._id })
        if (data) {
            setUserPosts(data)
        }
    }

    return (
        <div className='container my-24 px-6 mx-auto'>
            <section class="mb-32 text-gray-800">
                <div class="grid lg:grid-cols-3 gap-6">
                    {(userPosts && userPosts.length > 0) ? (
                        <>
                            {userPosts.map(post => (
                                <div key={post?._id} className="zoom h-80 shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover"
                                    style={{ backgroundPosition: "50%" }} data-mdb-ripple="true" data-mdb-ripple-color="dark">
                                    <img src="https://mdbootstrap.com/img/new/standard/city/041.jpg"
                                        className="w-full transition duration-300 ease-linear align-middle" />
                                    <a href="#!">
                                        <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                                            style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}>
                                            <div className="flex justify-start items-end h-full">
                                                <h5 className="text-lg font-bold text-white m-6">{post.name}</h5>
                                            </div>
                                        </div>
                                        <div className="hover-overlay">
                                            <div
                                                className="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
                                                style={{ backgroundColor: "rgba(253, 253, 253, 0.15)" }}></div>
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </>
                    )
                        : <>
                            <p>No Posts Found</p>
                        </>
                    }
                </div>
            </section>
        </div>
    )
}

export default UserPosts