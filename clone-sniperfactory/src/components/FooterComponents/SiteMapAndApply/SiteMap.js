import styles from '../../../styles/Footer/SiteMapAndApply/siteMap.module.css';

function SiteMap() {
    return (
        <div className={styles.siteMapWrapper}>
            <div className={styles.siteMapTitle}>SiteMap</div>
            <div className={styles.siteMapItems}>
                <span className={styles.siteMapItem}>인사이드아웃</span>
                <span className={styles.siteMapItem}>스펙스페이스</span>
                <span className={styles.siteMapItem}>스펙랩</span>
            </div>
        </div>
    );
}

export default SiteMap;