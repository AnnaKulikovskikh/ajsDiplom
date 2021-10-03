/**
 * Generates random characters
 *
 * @param allowedTypes iterable of classes
 * @param maxLevel max character level
 * @returns Character type children (ex. Magician, Bowman, etc)
 */
export function* characterGenerator(allowedTypes, maxLevel) {
  // TODO: write logic here
  for (let i of allowedTypes) {
    yield i;
  }
}

export function* generateTeam(allowedTypes, maxLevel, characterCount) {
  // TODO: write logic here
  for (let i = 0; i < characterCount; i++) {
    let i = yield* characterGenerator(allowedTypes, maxLevel);
    i.level = maxLevel;
    return i;
  }
}
