import styles from './Button.module.css'
import cn from 'classnames';
// eslint-disable-next-line react/prop-types
function Button({ content, appearence, ...props }) {

    return (
        <button {...props} className={cn(styles.button, {
            [styles.blue]: appearence == 'blue',
            [styles.ghost]: appearence == 'ghost',
            [styles.red]: appearence == 'red',
            [styles.search]: appearence == 'search',
        })}>{content}</button>
    )
}

export default Button