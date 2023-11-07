import styles from './ColorForm.module.css'

// eslint-disable-next-line react/prop-types
export default function ColorForm({ handleOnChange }) {
  return (
    <div className={styles.form}>
        <label htmlFor="color">Select Your Color here</label>
        <div> <input type="color" name="color" id="color" onChange={handleOnChange} /> </div>
    </div>
  )
}
