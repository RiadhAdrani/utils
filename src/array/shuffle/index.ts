/**
 * create a new shuffled array from the input.
 * @param input initial array
 * @see https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
 */
export default function shuffle<T>(input: T[]): T[] {
  let currentIndex = input.length,
    randomIndex;

  const array = input;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}
