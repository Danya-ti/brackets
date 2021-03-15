module.exports = function check(str, bracketsConfig)
{
  let pairObj = {};
  let brackets = str.split("");
  let openBrack = [];
  let result = true;

  bracketsConfig.forEach(pair => {
    pairObj[pair[1]] = pair[0];
  });

  brackets.forEach(element => {
    if (pairObj[element] === element) {
      if (element === openBrack[openBrack.length - 1]) {
        openBrack.pop();
      } else {
        openBrack.push(element);
      }
    } else if (!pairObj[element]) {
      openBrack.push(element);
    } else {
      if (pairObj[element] === openBrack[openBrack.length - 1]) {
        openBrack.pop();
      } else {
        result = false;
      }
    }
  });

  if (openBrack.length !== 0) {
    result = false;
  }

  return result;
}
