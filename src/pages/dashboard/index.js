import CustomizedLayout from '@/components/layout/customized-layout'
import React from 'react'

const Dashboard = () => {
  return (
    <div>Dashboard</div>
  )
}

Dashboard.getLayout = (page) => (
    <CustomizedLayout>{page}</CustomizedLayout>
)

export default Dashboard