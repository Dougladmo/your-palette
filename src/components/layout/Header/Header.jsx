import styles from './Header.module.css'

import {Fade } from 'react-awesome-reveal'

import Title from './Title'
import Logo from '../../../assets/heart-smile.png'

export default function Header() {
  return (
    <div className={styles.header} >
        <Fade>
      <div className={styles.header_inner}>
        <div className={styles.logo}>
          <img src={Logo} alt="logo" />
          <h1>Your palette.</h1>
        </div>
        <Title />
      </div>
        </Fade>
    </div>
  )
}
