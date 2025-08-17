import styles from '../../../styles/Footer/Information/informationRight.module.css';

function InformationRight() {
    return (
        <div className={styles.informationRight}>
            <div className={styles.policyRow}>
                <span>개인정보 처리방침</span>
                <span>|</span>
                <span>서비스 이용약관</span>
                <span>|</span>
                <span>환불규정</span>
            </div>
            <div className={styles.copyrightRow}>
                2025 스나이퍼팩토리 Co.All rights reserved
            </div>
        </div>
    );
}

export default InformationRight;