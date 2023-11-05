import styles from './ColorForm.module.css'

export default function ColorForm() {
  return (
    <div className={styles.form}>
        <label htmlFor="color">Select Your Color here</label>
        <div> <input type="color" name="color" id="color" /> </div>
    </div>
  )
}
