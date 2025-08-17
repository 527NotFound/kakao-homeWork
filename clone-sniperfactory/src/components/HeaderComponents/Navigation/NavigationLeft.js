// CSS Style
import styles from '../../../styles/Header/HeaderNavigation/navigationLeft.module.css';

function NavigationLeft() {
    return (
        <div className={ styles.left }>
            <img src="https://sniperfactory.com/sfac-symbol.svg" alt="sniperfactory" className={ styles.logo } />
            <ul className={ styles.menuList }>
                <li>교육과정</li>
                <li>공지사항</li>
                <li>수강후기</li>
                <li className={ styles.active }>강사모집</li>
                <li className={styles.highlight }>스팩랩</li>
            </ul>
        </div>
    );
}

export default NavigationLeft;