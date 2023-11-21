import styles from './Footer.module.css'
import Logo from '../../../assets/heart-smile.png'

export default function Footer() {
  return (
    <div className={styles.Footer}>
      <img src={Logo} alt="logo footer" />
      <p>Your palette &copy; 2023.</p>
    </div>
  )
}
