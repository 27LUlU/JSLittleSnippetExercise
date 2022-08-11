import "./styles.css";

/*
 **Prime number practice
 */
function amIWilson(p) {
  // check if prime is Wilson
  if (p <= 0 || p === 1) {
    return false;
  } else if (p <= 3) {
    return true;
  } else {
    var i = 1;
    let j = p - 1;
    while (j) {
      i = i * j;
      j--;
    }
    // return i;
    // var j = 1;
    // for (let i = 1; i <= p - 1; i++) {
    //   j = j * i;
    // }
    if ((i + 1) % (p * p) === 0) {
      return true;
    } else {
      return false;
    }
  }
}
document.write(amIWilson(5));
// document.getElementById("app").innerHTML = amIWilson(5);