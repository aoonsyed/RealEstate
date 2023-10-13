import React from 'react'
import UserPosts from '../components/UserPosts/UserPosts'
import { DashboardLayout } from '../layout/DashboardLayout'

const YourPost = () => {
    return (
        <div>
            <DashboardLayout>
                <UserPosts />
            </DashboardLayout>
        </div>
    )
}

export default YourPost