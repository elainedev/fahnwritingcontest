function getRandomNumber(end: number): number {
  const randomNumber = Math.floor(Math.random() * end) + 1;

  return randomNumber;
}

export { getRandomNumber };
