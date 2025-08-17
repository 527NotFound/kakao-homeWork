// Child Node
import NavigationLine from './NavigationLine';

// CSS Node
import styles from '../../../styles/Header/HeaderNavigation/navigationBox.module.css';

function NavigationBox () {
    return (
        <div className= { styles.navBox }>
            <NavigationLine />    
        </div>
    );
}

export default NavigationBox;