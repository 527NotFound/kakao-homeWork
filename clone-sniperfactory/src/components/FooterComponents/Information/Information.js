// Child Node
import InformationLeft from './InformationLeft';
import InfromationRight from './InformationRight';

// CSS Style
import styles from '../../../styles/Footer/Information/information.module.css';

function Information() {
    return (
        <div className={styles.information}>
            <div className={styles.informationContainer}>
                <InformationLeft />
                <InfromationRight />
            </div>
        </div>
    );
}

export default Information;