// Child Node
import CurriculumText from './CurriculumText'

// CSS Style
import styles from '../../styles/Header/HeaderCurriculum/headerCurriculum.module.css';

function CurrentBestCurriculum () {
    return (
        <div className={ styles.curriculumBg }>
            <CurriculumText>
                2025년 미래내일 일경험 『 통합디자인 2기 』 인턴형 참여기업 모집 공고
            </CurriculumText>
        </div>
    );
}

export default CurrentBestCurriculum;