import styles from './Header.module.css'
import logo from '../../assets/logo.svg'
import Button from '../UI/button/Button'
import Profile from '../UI/profile/Profile'


function Header() {


    return (
        <div className={styles.menu}>
            <img src={logo} alt='logo' className={styles.logo} />
            <div className={styles.menu_items}>
                <p className={styles.menu_item_help}>Помощь</p>
                <Profile />
                <Button appearence='blue' content='Всі курси' />
            </div>
        </div>
    )
}

export default Header