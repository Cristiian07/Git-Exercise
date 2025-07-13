let MAX_RETRIES = 5;

function checkData() {
  let value = 10;
  if (value === MAX_RETRIES) {
    console.log("ok");
  } else {
    console.log("not ok");
  }
}

class UserProfile {
  constructor(n) {
    this.n = n;
  }
}

checkData();

// let array = new Array();
// let array2 = [];
