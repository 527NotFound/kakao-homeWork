// Child Node
import InsideOut from '../components/FooterComponents/InsideOut';
import SiteMapAndApply from '../components/FooterComponents/SiteMapAndApply/SiteMapAndApply';
import Information from './FooterComponents/Information/Information';

// CSS Style
import styles from '../styles/Footer/footer.module.css';

function Footer() {
    return(
        <div className={styles.footerContainer}>
            <InsideOut />
            <SiteMapAndApply />
            <hr />
            <Information />
        </div>
    );
}

export default Footer;