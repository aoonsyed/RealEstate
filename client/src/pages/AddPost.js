import React from 'react'
import AddPostForm from '../components/AddPost/AddPostForm'
import { DashboardLayout } from '../layout/DashboardLayout'

const AddPost = () => {
    return (
        <div>
            <DashboardLayout>
                <AddPostForm />
            </DashboardLayout>
        </div>
    )
}

export default AddPost