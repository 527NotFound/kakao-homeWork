import Card from './Card';
import cardData from './cardData'

import styles from '../../../styles/Main/Card/card.module.css'

function CardGrid() {
    return (
        <div className={styles.cardGrid}>
            {cardData.map((card, idx) => (
                <Card key={idx} {...card} />
            ))}
        </div>
    );
}

export default CardGrid;