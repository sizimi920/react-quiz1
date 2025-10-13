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

  // 正解数に応じた演出データ
  const getScoreData = () => {
    if (scorePercentage === 100) {
      return {
        message: '🏆 パーフェクト！',
        emoji: '🎊',
        rank: 'perfect',
        celebrationLevel: 'extreme',
      };
    } else if (scorePercentage >= 80) {
      return {
        message: '🎉 素晴らしい！',
        emoji: '⭐',
        rank: 'excellent',
        celebrationLevel: 'high',
      };
    } else if (scorePercentage >= 60) {
      return {
        message: '👏 良く出来ました！',
        emoji: '😊',
        rank: 'good',
        celebrationLevel: 'medium',
      };
    } else if (scorePercentage >= 40) {
      return {
        message: '💪 もう少し！',
        emoji: '😅',
        rank: 'fair',
        celebrationLevel: 'low',
      };
    } else {
      return {
        message: '📚 頑張りましょう！',
        emoji: '😔',
        rank: 'poor',
        celebrationLevel: 'none',
      };
    }
  };

  const scoreData = getScoreData();

  return (
    <div className={styles.resultContainer}>
      <Loading active={active}></Loading>

      <div className={styles.resultCard}>
        <h1 className={styles.resultTitle}>🏁 結果発表</h1>

        <div className={styles.scoreSection}>
          <div className={`${styles.scoreCircle} ${styles[scoreData.rank]}`}>
            <span className={styles.scoreNumber}>{correctNumLen}</span>
            <span className={styles.scoreTotal}>/ {maxQuizLen}</span>
            <div className={styles.scoreEmoji}>{scoreData.emoji}</div>
          </div>
          <div className={styles.scoreMessage}>{scoreData.message}</div>
          <div className={styles.scorePercentage}>
            正解率: {scorePercentage}%
          </div>
        </div>

        <Result
          maxQuizLen={maxQuizLen}
          correctNumLen={correctNumLen}
          celebrationLevel={scoreData.celebrationLevel}
          rank={scoreData.rank}
        />

        <div className={styles.actionSection}>
          <Link to={ROUTES.HOME} className={styles.retryButton}>
            🔄 もう一度チャレンジ
          </Link>
        </div>
      </div>
    </div>
  );
}
