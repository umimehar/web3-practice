//
//
//  GLOBAL COMMON / UTIL functions   //
// --------------------------------- //
//  DON'T ADD Common or UTIL HERE!   //
// --------------------------------- //
// ADD Common / util folder - screen //
// Scoped for the functions folders  //
// --------------------------------- //

export function containsAny(str: string, items: any[]): boolean {
  for (let i in items) {
    const item = items[i];

    if (str.indexOf(item) > -1) {
      return true;
    }
  }

  return false;
}

export function camelToWord(str: string) {
  return str
    .replace(/([A-Z])/g, " $1")
    .replace(/^\w/, (char) => char.toUpperCase());
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize
// remove all {}()[]'"""'' and normalize all the string
export function slugify(string: string): string {
  return string
    .toString() // Cast to string
    .toLowerCase() // Convert the string to lowercase letters
    .normalize("NFD") // The normalize() method returns the Unicode Normalization Form of a given string.
    .trim() // Remove whitespace from both sides of a string
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w\-]+/g, "") // Remove all non-word chars
    .replace(/\-\-+/g, "-"); // Replace multiple - with single -
}

export function unSlugify(str: string = "") {
  return str
    .replace(/-/g, " ")
    .toLowerCase()
    .replace(/\w/, (firstLetter) => firstLetter.toUpperCase());
}
