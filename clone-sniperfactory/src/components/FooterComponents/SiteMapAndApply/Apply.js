import styles from '../../../styles/Footer/SiteMapAndApply/apply.module.css';

function Apply () {
    return (
        <div className={styles.applyWrapper}>
            <div className={styles.applyTitle}>Apply</div>
            <div className={styles.applyItems}>
                <span className={styles.applyItems}>멘토 지원</span>
                <span className={styles.applyItems}>참여기업 지원</span>
                <span className={styles.applyItems}>강의장 대여</span>
            </div>
        </div>
    );
}

export default Apply;