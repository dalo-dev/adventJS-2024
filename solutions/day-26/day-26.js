function getCompleted(timeWorked, totalTime) {
  const timeToSeconds = (time) => {
    const [hours, minutes, seconds] = time.split(":").map(Number);
    return hours * 3600 + minutes * 60 + seconds;
  };

  const totalSecondsWorked = timeToSeconds(timeWorked);
  const totalSecondsTotal = timeToSeconds(totalTime);

  return `${Math.round((totalSecondsWorked / totalSecondsTotal) * 100)}%`;
}
