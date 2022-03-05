import React from 'react'
import Layout from '../components/Layout'
import unavailable from '../img/unavailable.png'

const NotFoundPage = () => (
  <Layout>
    <div>
      <h1>URL Address Not Found</h1>
      <p>Sorry. The page is unavailable :(</p>
    </div>

    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
      <img src={unavailable} alt="Page unavailable"/>
    </div>
  </Layout>
)

export default NotFoundPage
