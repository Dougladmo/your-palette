import styles from './Header.module.css'
import {useTypewriter, Cursor} from 'react-simple-typewriter'

export default function Title() {
    const [text] = useTypewriter({
        words: [' art', ' design', ' palette 💙'],
        loop: {},
    });

  return (
    <div>
        <h2 className={styles.title}>
             Make your
            <span>
                {text}
            </span>
            <span> 
                <Cursor />
            </span>
        </h2>
    </div>
  )
}
