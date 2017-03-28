function assert(subject, message, functionName){
  this.subject = subject;
  this.message = message;
  this.functionName = functionName;
}

assert.prototype.isDefined = function() {
  if(typeof this.subject === "undefined" ) {
    throw new Error("Test failed, " + this.message);
  }
  else {
    console.log(this.functionName + " test passed!");
  }
};

assert.prototype.isTrue = function() {
  if(this.subject !== true ) {
    throw new Error("Test failed, " + this.message);
  }
  else {
    console.log(this.functionName + " test passed!");
  }
};

// assert.prototype.isEqual = function() {
//   if(typeof this.subject === "undefined" ) {
//     throw new Error("Test failed, " + this.message)
//   }
//   else {
//     console.log("Test passed!")
//   };
// };
