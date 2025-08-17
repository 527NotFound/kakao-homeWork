// Child Node
import SiteMapAndApplyLine from './SiteMapAndApplyLine';

// CSS Style
import styles from '../../../styles/Footer/SiteMapAndApply/siteMapAndApply.module.css'

function SiteMapAndApply() {
    return (
        <div className={styles.siteMapAndApply}>
            <SiteMapAndApplyLine />
        </div>
    );
}

export default SiteMapAndApply;