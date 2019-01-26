import React from 'react';
import styles from './LandingContainer.module.css';
import Anime from 'animejs';

import { Route,Link, Redirect, withRouter } from 'react-router-dom';



const Button = () => (
    <Route render={({ history}) => (
      <button
      style={{backgroundColor: '#f7f7f7', borderRadius: 20, width: 100, height: 35}}
        type='button'
        onClick={() => { history.push('/intro') }}
      >
        Begin
      </button>
    )} />
  )

const LandingContainer =() => {

   
    

    return(
        
        <div className={styles.LandingContainer}>
                <div className="top">
                    <img className={styles.img} src={require('../../assets/backgroundImages/topImage.jpg')}/>
                
                </div>
                <div className="bottom">
                    <p className={styles.title}> MindValley Presents LifeBook Intra-Spect Assessment  </p>
                    <p className={styles.subtitle}> A lifetime of insights in just 20 minutes</p>
                    <Button/>
                </div>
           
           
        </div>

    );
}

export default LandingContainer;