import styles from '../../../styles/Footer/Information/informationLeft.module.css';

function InformationLeft() {
    return (
        <div className={styles.InformationLeft}>
            <div className={styles.infoDetail}>
                <span className={styles.label}>대표자</span> 박두철 &nbsp;&nbsp; | &nbsp;&nbsp; 123-45-67890
            </div>
            <div className={styles.infoDetail}>
                서울 강서구 마곡중앙로 59-5
            </div>
            <div className={styles.infoDetail}>
                Tel 02-5959-5959&nbsp;&nbsp; | &nbsp;&nbsp;Fax 02-5959-5959
            </div>
            <div className={styles.infoDetail}>
                <span className={styles.label}>Mail</span>&nbsp;&nbsp;ParkDooChul@sniperfactory.com
            </div>
        </div>
    );
}

export default InformationLeft;