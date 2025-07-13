var DATA = 5;  // ❌ var used instead of const/let
               // ❌ UPPER_SNAKE_CASE used for variable that’s not a constant
function d() {  // ❌ function name not descriptive (d)
var a=10       // ❌ missing indentation and spaces around '='
if(a==DATA){   // ❌ use === instead of ==, missing spaces around operators
console.log("ok") // ❌ inconsistent quotes (should use single or double consistently)
}
else{
  console.log('not ok') // ❌ inconsistent indentation and quote style
}
}
class userprofile {  // ❌ class name should be PascalCase: UserProfile
  constructor(n){
this.n=n          // ❌ missing indentation and spaces
  }
}
d() // ❌ calling function with non-descriptive name, no comments
