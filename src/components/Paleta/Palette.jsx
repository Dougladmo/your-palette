import styles from './Palette.module.css'

// eslint-disable-next-line react/prop-types
export default function Palette({ color1, color2, color3, color4, color5 }) {

  return (
    <div className={styles.paleta}>
      <div style={{backgroundColor: `${color1}`}} className={styles.color}>{color1}</div>
      <div style={{backgroundColor: `${color2}`}} className={styles.color}>{color2}</div>
      <div style={{backgroundColor: `${color3}`}} className={styles.color}>{color3}</div>
      <div style={{backgroundColor: `${color4}`}} className={styles.color}>{color4}</div>
      <div style={{backgroundColor: `${color5}`}} className={styles.color}>{color5}</div>
    </div>
  )
}
