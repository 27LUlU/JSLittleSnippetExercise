import "./styles.css";

// function amIWilson(p) {
//   // check if prime is Wilson
//   if (p <= 0 || p === 1) {
//     return false;
//   } else if (p <= 3) {
//     return true;
//   } else {
//     var i = 1;
//     let j = p - 1;
//     while (j) {
//       i = i * j;
//       j--;
//     }
//     // return i;
//     // var j = 1;
//     // for (let i = 1; i <= p - 1; i++) {
//     //   j = j * i;
//     // }
//     if ((i + 1) % (p * p) === 0) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// }
// document.write(amIWilson(5));

var twoSum = function (nums, target) {
  var m = new Array();
  for (var i = 0; i < nums.length; i++) {
    for (var j = i + 1; j < nums.length; i++) {
      if (nums[i] + nums[j] === target) {
        m = [i, j];
        return m;
      }
    }
  }
};
document.write(twoSum([2, 7, 11, 15], 9));
// document.getElementById("app").innerHTML = amIWilson(5);