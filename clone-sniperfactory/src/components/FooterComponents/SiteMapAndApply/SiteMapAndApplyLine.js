// Child Node
import SiteMap from './SiteMap';
import Apply from './Apply';

// CSS Style
import styles from '../../../styles/Footer/SiteMapAndApply/siteMapAndApplyLine.module.css';

function SiteMapAndApplyLine() {
    return (
        <div className={styles.siteMapAndApplyLine}>
            <SiteMap />
            <Apply />
        </div>
    );
}

export default SiteMapAndApplyLine;