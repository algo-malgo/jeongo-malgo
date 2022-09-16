function solution(phone_number) {
  const totalLength = phone_number.length;
  const START = totalLength - 5;

  let newString = "";

  for (let i = 0; i < totalLength; i++) {
    if (i <= START) {
      newString += "*";
    } else {
      newString += phone_number[i];
    }
  }

  return newString;
}
