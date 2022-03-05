import React from 'react'
import Layout from '../components/Layout'
import unavailable from '../img/unavailable.png'

const NotFoundPage = () => (
  <Layout>
    <div>
      <h1>NOT FOUND</h1>
      <p>"Sorry. The page is unavailable :("</p>
      <p><Image
            img src={unavailable} alt="Page unavailable"
            height={500}
            width={300}
            style={{ alignSelf: 'center'}}
      /></p>
    </div>
  </Layout>
)

export default NotFoundPage
