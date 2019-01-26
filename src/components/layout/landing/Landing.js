import React from 'react'

import Header from '../header/Header'
import Footer from '../footer/Footer'
import LandingContainer from '../../landingContainer/LandingContainer'

import styles from'./Landing.module.css'
const Landing = () => {
    return (
        <div className={styles.landing}>

    <div className={styles.heading}>
        <Header/>
    </div>
        <div className={styles.container}>
            <LandingContainer/>
        </div>
     
     <div className={styles.footer}>
     <Footer/>
     </div>
        
    </div>
      
    )

}

export default Landing;