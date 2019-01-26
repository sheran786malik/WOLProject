import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import styles from './IntroContainer.module.css'

const Next = () => (
    <Route render={({ history}) => (
      <button
        type='button'
        onClick={() => { history.push('/wayoflife') }}
        style={{height: 35, width: 100, backgroundColor: '#f7f7f7', borderRadius: 25, marginLeft:300}}
      >
        Next
      </button>
    )} />
  )
  const Back = () => (
    <Route render={({ history}) => (
      <button
        type='button'
        onClick={() => { history.push('/') }}>

        <img style={{paddingRight: 20, border: 'none'}}className={styles.leftArrow}src={require('../../assets/leftArrow.png')}  />

      </button>
    )} />
  )
const IntroContainer = () => {

    return (
        <div className={styles.introContainer}>
            <div className="top">
            <img className={styles.img} src={require('../../assets/backgroundImages/topImage.jpg')}/>
            
            </div>
            <div className="bottom">

                <p className={styles.subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                 Phasellus augue mauris, molestie sed fringilla ut, cursus et nunc. Aenean tristique tempor iaculis
                 . Phasellus ultricies venenatis eros non scelerisque. Duis tincidunt nibh sed lectus accumsan,
                 nec maximus orci laoreet. Quisque viverra, eros vel convallis vulputate, </p>
                 
                 <Back/>
                <Next/>

            </div>
           
           
        </div>


    )
}

export default IntroContainer;