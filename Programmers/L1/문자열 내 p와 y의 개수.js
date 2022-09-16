function solution(s) {
  const result = {
    p: 0,
    y: 0,
  };

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "p" || s[i] === "P") {
      result.p += 1;
    } else if (s[i] === "y" || s[i] === "Y") {
      result.y += 1;
    }
  }

  if (result.p === result.y) {
    return true;
  } else {
    return false;
  }
}
