import { useEffect, useState } from 'react';
import Button from '../components/Button/Button';
import Display from '../components/Display/Display';
import quizData from '../data/quiz';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../const';
import styles from './QuizPage.module.css';

export default function QuizPage() {
  const [quizIndex, setQuizIndex] = useState(0);
  const [answerLogs, setAnswerLogs] = useState([]);
  const [isAnswering, setIsAnswering] = useState(false);
  const navigation = useNavigate();
  const MAX_QUIZ_LEN = quizData.length;

  const handleClick = async (clickedIndex) => {
    if (isAnswering) return; // 連続クリック防止

    setIsAnswering(true);

    if (clickedIndex === quizData[quizIndex].answerIndex) {
      setAnswerLogs((prev) => [...prev, true]);
    } else {
      setAnswerLogs((prev) => [...prev, false]);
    }

    // 少し待ってから次の問題へ
    setTimeout(() => {
      setQuizIndex((prev) => prev + 1);
      setIsAnswering(false);
    }, 800);
  };

  useEffect(() => {
    if (answerLogs.length === MAX_QUIZ_LEN) {
      const correctNum = answerLogs.filter((answer) => answer === true);
      navigation(ROUTES.RESULT, {
        state: {
          maxQuizLen: MAX_QUIZ_LEN,
          correctNumLen: correctNum.length,
        },
      });
    }
  }, [answerLogs, MAX_QUIZ_LEN, navigation]);

  const progressPercentage = ((quizIndex + 1) / MAX_QUIZ_LEN) * 100;

  return (
    <div className={styles.quizContainer}>
      <div className={styles.progressSection}>
        <div className={styles.progressInfo}>
          <span className={styles.questionCount}>
            問題 {quizIndex + 1} / {MAX_QUIZ_LEN}
          </span>
        </div>
        <div className={styles.progressBar}>
          <div
            className={styles.progressFill}
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>

      {quizData[quizIndex] && (
        <div className={styles.questionSection}>
          <Display className={styles.questionDisplay}>
            Q{quizIndex + 1}. {quizData[quizIndex].question}
          </Display>

          <div className={styles.optionsContainer}>
            {quizData[quizIndex].options.map((option, index) => (
              <Button
                key={`option-${index}`}
                onClick={() => handleClick(index)}
                disabled={isAnswering}
                className={styles.optionButton}
              >
                <span className={styles.optionNumber}>
                  {String.fromCharCode(65 + index)}
                </span>
                <span className={styles.optionText}>{option}</span>
              </Button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
