import styles from '../../../styles/HeaderNavigation/navigationRight.module.css';

function NavigationRight () {
    return (
        <div className={ styles.right }>
            <button className={ styles.inquiry }>기업문의</button>
            <button className={ styles.login }>로그인</button>
        </div>
    );
}

export default NavigationRight;