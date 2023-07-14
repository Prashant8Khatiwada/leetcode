var isPalindrome = function (x = 121) {
  let unrev = x.toString().split("").map(x);
  let rev = unrev.reverse();
  if (unrev === rev) {
    return true;
  } else {
    return false;
  }
};
isPalindrome(121);
