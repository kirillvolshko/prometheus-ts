import React, { useState } from 'react';
import styles from './Profile.module.css'
import icon from '../../../assets/icon.png'

function Profile() {

    const [modalOpen, setModalOpen] = useState(false);

    const handleProfileClick = () => {
        setModalOpen(!modalOpen);
    };

    return (
        <div style={{ position: 'relative' }}>
            <div className={styles.profile_container}>
                <img src={icon} className={styles.icon} />
                <p className={styles.nickname}>kirill_voloshko</p>
                <button className={styles.profile_button} onClick={handleProfileClick}>&#9660;</button>
            </div>
            {modalOpen && (
                <div className={styles.modal_profile}>
                    <p>Панель управління</p>
                    <p>Профіль</p>
                    <p>Обліковий запис</p>
                    <p>Історія заказів</p>
                    <p>Вихід</p>
                </div>
            )}
        </div>
    )
}

export default Profile