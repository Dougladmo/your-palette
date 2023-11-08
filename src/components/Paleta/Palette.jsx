import styles from './Palette.module.css'
import { AiFillCopy } from "react-icons/ai";

// eslint-disable-next-line react/prop-types
export default function Palette({ color1, color2, color3, color4, color5 }) {

  const handleColor1 = () => {
    navigator.clipboard.writeText(color1).then(() => {
      alert('copied to clipboard')
    })
  }
  const handleColor2 = () => {
    navigator.clipboard.writeText(color2)
    alert('copied to clipboard')
  }
  const handleColor3 = () => {
    navigator.clipboard.writeText(color3)
    alert('copied to clipboard')
  }
  const handleColor4 = () => {
    navigator.clipboard.writeText(color4)
    alert('copied to clipboard')
  }
  const handleColor5 = () => {
    navigator.clipboard.writeText(color5)
    alert('copied to clipboard')
  }
  return (
    <div className={styles.paleta}>
      <div onClick={handleColor1} style={{backgroundColor: `${color1}`}} className={styles.color}>{color1}<p><AiFillCopy/>Copiar</p></div>
      <div onClick={handleColor2} style={{backgroundColor: `${color2}`}} className={styles.color}>{color2}<p><AiFillCopy/>Copiar</p></div>
      <div onClick={handleColor3} style={{backgroundColor: `${color3}`}} className={styles.color}>{color3}<p><AiFillCopy/>Copiar</p></div>
      <div onClick={handleColor4} style={{backgroundColor: `${color4}`}} className={styles.color}>{color4}<p><AiFillCopy/>Copiar</p></div>
      <div onClick={handleColor5} style={{backgroundColor: `${color5}`}} className={styles.color}>{color5}<p><AiFillCopy/>Copiar</p></div>
    </div>
  )
}
