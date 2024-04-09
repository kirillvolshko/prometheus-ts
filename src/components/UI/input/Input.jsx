import React from 'react'
import styles from './Input.module.css'
import Button from '../button/Button'
function Input() {
    return (
        <div className={styles.search_container}>
            <label className={styles.search_label}>Пошук за вашими курсами</label>
            <div className={styles.input_container}>
                <input className={styles.search_input} />
                <Button appearence='search' content='&#128269;' />
            </div>
        </div>
    )
}

export default Input