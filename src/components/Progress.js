function Progress({ index, numQuestions, points, maxPossiblePoints, answer }) {
  return (
    <header className="progress">
      <progress
        value={index + Number(answer !== null)}
        max={numQuestions}
      ></progress>
      <p>
        Questions <strong>{index + 1}</strong>/{numQuestions}
      </p>
      <p>
        {points}/{maxPossiblePoints}
      </p>
    </header>
  );
}

export default Progress;
