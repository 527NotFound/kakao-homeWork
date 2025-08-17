// Child Node
import NavigationLeft from './NavigationLeft';
import NavigationRight from './NavigationRight';

// CSS Style
import styles from '../../../styles/Header/HeaderNavigation/navigationLine.module.css';

function NavigationLine () {
    return (
        <div className= { styles.line }>
            <NavigationLeft />
            <NavigationRight />
        </div>
    );
}

export default NavigationLine;