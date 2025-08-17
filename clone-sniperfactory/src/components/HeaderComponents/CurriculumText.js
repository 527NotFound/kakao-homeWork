import styles from '../../styles/Header/HeaderCurriculum/headerCurriculum.module.css';

function CurriculumText ({ children }) {
    return (
        <p className={ styles.curriculumText }>
            { children }
        </p>
    );
}

export default CurriculumText;