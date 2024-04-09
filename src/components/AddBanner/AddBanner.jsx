import Button from '../UI/button/Button'
import styles from './AddBanner.module.css'
import add_banner from '../../assets/add_banner.svg'
function AddBanner() {
    return (
        <div className={styles.banner_container}>

            <div className={styles.text_container}>
                <h1 className={styles.add_title}>Ваша ідеальна робота чекає на вас!</h1>
                <p className={styles.add_description}>Знайдіть вакансії за вашою спеціальністю та почніть <br />
                    свій шлях до успіху вже сьогодні</p>
                <Button appearence='red' content='Дивитись вакансії' />
            </div>
            <img src='https://prometheus.org.ua/wp-content/uploads/2024/03/Ellipse_38_general_banner_robota_ua.svg' alt='' className={styles.banner_item} />
            <div className={styles.banner_item_two}></div>
            <div>
                <img src={add_banner} alt='add_bunner' className={styles.add_banner} />
            </div>




        </div>
    )
}

export default AddBanner