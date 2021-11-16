/**
 * Generates random characters
 *
 * @param allowedTypes iterable of classes
 * @param maxLevel max character level
 * @returns Character type children (ex. Magician, Bowman, etc)
 */
export function characterGenerator(allowedTypes, maxLevel) {
  // TODO: write logic here
  const random = new allowedTypes[Math.floor(Math.random() * allowedTypes.length)];
  random.level = Math.round(0.5 + Math.random() * maxLevel);
  return random;
  //for (let i of allowedTypes) {
   // yield i;
  //}
}

export default function generateTeam(allowedTypes, maxLevel, characterCount) {
  // TODO: write logic here
  let team = [];
  for (let i = 0; i < characterCount; i++) {
    let i = characterGenerator(allowedTypes, maxLevel);
    team.push(i);
  }
  return team;
  // for (let i = 0; i < characterCount; i++) {
  //   let i = yield* characterGenerator(allowedTypes, maxLevel);
  //   i.level = maxLevel;
  //   return i;
}
