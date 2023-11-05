import { useState } from 'react'
import styles from './Palette.module.css'

export default function Palette() {
  const [firstColor, setFirstColor] = useState('#E94E77')
  const [secondColor, setSecondColor] = useState('#99f399')
  const [thirdColor, setThirdColor] = useState('#C6A49A')
  const [forthColor, setForthColor] = useState('#C6E5D9')
  const [fifthColor, setFiftColor] = useState('#F4EAD5')

  // setFirstColor('#e94e77')

  return (
    <div className={styles.paleta}>
      <div style={{backgroundColor: `${firstColor}`}} className={styles.color}>{firstColor}</div>
      <div style={{backgroundColor: `${secondColor}`}} className={styles.color}>{secondColor}</div>
      <div style={{backgroundColor: `${thirdColor}`}} className={styles.color}>{thirdColor}</div>
      <div style={{backgroundColor: `${forthColor}`}} className={styles.color}>{forthColor}</div>
      <div style={{backgroundColor: `${fifthColor}`}} className={styles.color}>{fifthColor}</div>
    </div>
  )
}
