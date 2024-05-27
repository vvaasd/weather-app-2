export function cls(array) {
  return " " + array.filter((value) => value).join(" ");
}

export function moduleCls(array, obj) {
  return array
    .filter((value) => obj[value])
    .map((item) => obj[item])
    .join(" ");
}
