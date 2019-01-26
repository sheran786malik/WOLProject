import React from 'react';

import Header from '../../components/layout/header/Header'
import Footer from '../../components/layout/footer/Footer'
import IntroContainer from '../../components/introContainer/IntroContainer'
import styles from './Intro.module.css';

const Intro = () => {
    return (
        <div className={styles.landing}>

    <div className={styles.heading}>
        <Header/>
    </div>
        <div className={styles.container}>
            <IntroContainer/>
        </div>
     
     <div className={styles.footer}>
     <Footer/>
     </div>
        
    </div>

    );
}

export default Intro;