import CustomizedLayout from '@/components/layout/customized-layout'
import React from 'react'

const NewProduct = () => {
  return (
    <section>New Product</section>
  )
}

NewProduct.getLayout = (page) => (
  <CustomizedLayout>{page}</CustomizedLayout>
)

export default NewProduct