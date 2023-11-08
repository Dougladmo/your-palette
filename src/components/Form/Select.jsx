import { useEffect, useState } from "react"
import styles from './ColorForm.module.css'

// eslint-disable-next-line react/prop-types
export default function Select() {

    const [modes, setModes] = useState([])

    useEffect(() => {
        setModes(["monochrome",
        "monochrome-dark",
        "monochrome-light",
        "analogic",
        "complement",
        "analogic-complement",
        "triad",
        "quad"])
    }, [])

    return (
        <div className={styles.form_control}>
          <label htmlFor='type of palette'>type of palette</label>
          <select
            name='mode'
            id='type of palette'
            required
          >
            <option disabled>Selecione uma opção</option>
            {modes.map((modes) => (
              <option value={modes} key={modes}>
                {modes}
              </option>
            ))}
          </select>
        </div>
      )
}
