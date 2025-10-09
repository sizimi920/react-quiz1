import { Link, useLocation } from 'react-router-dom';
import { ROUTES } from '../const';
import Result from '../components/Result/Result';
import Loading from '../components/Loading/Loading';
import { useEffect, useState } from 'react';
import styles from './ResultPage.module.css';

export default function ResultPage() {
  const [active, setActive] = useState(false);
  const location = useLocation();
  const maxQuizLen = location.state?.maxQuizLen || 0;
  const correctNumLen = location.state?.correctNumLen || 0;

  useEffect(() => {
    setTimeout(() => setActive(true), 1500);
  }, []);

  const scorePercentage = Math.round((correctNumLen / maxQuizLen) * 100);
  const getScoreMessage = () => {
    if (scorePercentage >= 80) return '🎉 素晴らしい！';
    if (scorePercentage >= 60) return '👏 良く出来ました！';
    if (scorePercentage >= 40) return '💪 もう少し！';
    return '📚 頑張りましょう！';
  };

  return (
    <div className={styles.resultContainer}>
      <Loading active={active}></Loading>

      <div className={styles.resultCard}>
        <h1 className={styles.resultTitle}>🏁 結果発表</h1>

        <div className={styles.scoreSection}>
          <div className={styles.scoreCircle}>
            <span className={styles.scoreNumber}>{correctNumLen}</span>
            <span className={styles.scoreTotal}>/ {maxQuizLen}</span>
          </div>
          <div className={styles.scoreMessage}>{getScoreMessage()}</div>
          <div className={styles.scorePercentage}>
            正解率: {scorePercentage}%
          </div>
        </div>

        <Result maxQuizLen={maxQuizLen} correctNumLen={correctNumLen} />

        <div className={styles.actionSection}>
          <Link to={ROUTES.HOME} className={styles.retryButton}>
            🔄 もう一度チャレンジ
          </Link>
        </div>
      </div>
    </div>
  );
}
