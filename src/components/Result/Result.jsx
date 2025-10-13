import Confetti from 'react-confetti';
import styles from './Result.module.css';

export default function Result({
  maxQuizLen,
  correctNumLen,
  celebrationLevel = 'medium',
  rank = 'good',
}) {
  // 正解数に応じたConfetti設定
  const getConfettiConfig = () => {
    switch (celebrationLevel) {
      case 'extreme':
        return {
          numberOfPieces: 300,
          recycle: true,
          colors: [
            '#FFD700',
            '#FF6B6B',
            '#4ECDC4',
            '#45B7D1',
            '#96CEB4',
            '#FECA57',
          ],
        };
      case 'high':
        return {
          numberOfPieces: 200,
          recycle: true,
          colors: ['#4ECDC4', '#45B7D1', '#96CEB4', '#FECA57'],
        };
      case 'medium':
        return {
          numberOfPieces: 100,
          recycle: false,
          colors: ['#4ECDC4', '#45B7D1', '#96CEB4'],
        };
      case 'low':
        return {
          numberOfPieces: 50,
          recycle: false,
          colors: ['#96CEB4', '#FECA57'],
        };
      case 'none':
        return {
          numberOfPieces: 0,
          recycle: false,
          colors: [],
        };
      default:
        return {
          numberOfPieces: 100,
          recycle: false,
          colors: ['#4ECDC4', '#45B7D1'],
        };
    }
  };

  const confettiConfig = getConfettiConfig();

  // 正解数に応じたメッセージ
  const getResultMessage = () => {
    const percentage = Math.round((correctNumLen / maxQuizLen) * 100);
    if (percentage === 100) return '完璧です！全問正解おめでとうございます！🏆';
    if (percentage >= 80) return '素晴らしい成績です！🌟';
    if (percentage >= 60) return 'よく頑張りました！👏';
    if (percentage >= 40) return 'もう一歩です！💪';
    return '次回は頑張りましょう！📚';
  };

  return (
    <>
      <div className={`${styles.result} ${styles[rank]}`}>
        <div className={styles.resultMessage}>{getResultMessage()}</div>
        <div className={styles.resultScore}>
          あなたの正解数は
          <span className={styles.resultHighlight}>
            {`全${maxQuizLen}問中、${correctNumLen}問`}
          </span>
          でした！
        </div>
      </div>
      {confettiConfig.numberOfPieces > 0 && (
        <Confetti
          numberOfPieces={confettiConfig.numberOfPieces}
          recycle={confettiConfig.recycle}
          colors={confettiConfig.colors}
        />
      )}
    </>
  );
}
