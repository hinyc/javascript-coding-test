export const validAnagram = (stringA: string, stringB: string) => {
  if (stringA.length !== stringB.length) {
    return false;
  }

  const a = stringA.split('').sort().join('');
  const b = stringB.split('').sort().join('');

  return a === b;
};

//hashmap
export const validAnagram2 = (stringA: string, stringB: string) => {
  if (stringA.length !== stringB.length) {
    return false;
  }

  const hashmap = new Map();

  for (let i = 0; i < stringA.length; i++) {
    hashmap.set(stringA[i], (hashmap.get(stringA[i]) || 0) + 1);
    hashmap.set(stringB[i], (hashmap.get(stringB[i]) || 0) - 1);
  }

  for (let value of hashmap.values()) {
    if (value !== 0) {
      return false;
    }
  }

  return true;
};

export const validAnagram3 = (stringA: string, stringB: string) => {
  if (stringA.length !== stringB.length) {
    return false;
  }

  const hashmap = {};

  for (const char of stringA) {
    hashmap[char] = (hashmap[char] || 0) + 1;
  }

  for (const char of stringB) {
    if (!hashmap[char]) {
      return false;
    }
    hashmap[char]--;
  }

  return true;
};
