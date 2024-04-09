import React from 'react'
import styles from './Footer.module.css'
import google_play from '../../assets/google-play.svg'
import app_store from '../../assets/app-store.svg'
import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'
import twitter from '../../assets/twitter.png'
import youtube from '../../assets/youtube.png'
import visa from '../../assets/visa-logo.svg'
import mastercard from '../../assets/mastercard-logo.svg'


function Footer() {
    return (
        <div>
            <div className={styles.main_container}>
                <div className={styles.container_items}>
                    <div>
                        <h3>Prometheus</h3>
                        <p>Про нас</p>
                    </div>
                    <div>
                        <h3>Prometheus+</h3>
                        <p>Корпоративне навчання</p>
                        <p>Співпраця</p>
                    </div>
                </div>
                <div>
                    <h3>Мобільні застосунки</h3>
                    <img src={google_play} alt='google_play' className={styles.store_footer} />
                    <img src={app_store} alt='app_store' className={styles.store_footer} />
                </div>
            </div>
            <div className={styles.under_container}>
                <div>
                    <p>© 2024 Prometheus</p>
                    <p>Політика конфіденційності</p>
                    <p>Договір публічної оферти</p>
                    <p>Допомога</p>
                </div>
                <div className={styles.foto_container}>
                    <div style={{ 'maxWidth': '90px' }}>
                        <img src={visa} alt='visa' className={styles.card_logo} />
                        <img src={mastercard} alt='mastercard' className={styles.card_logo} />
                    </div>
                    <div>
                        <img src={facebook} alt='facebook' className={styles.social_media} />
                        <img src={twitter} alt='twitter' className={styles.social_media} />
                        <img src={instagram} alt='instagram' className={styles.social_media} />
                        <img src={youtube} alt='youtube' className={styles.social_media} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer