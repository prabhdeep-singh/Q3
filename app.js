var MyClass = (function() {
  return function() {
    this.regFunctionsCount = 0;
    this.count = 0;
    this.isCallbackExecuted = false;
    // regestering new functions as function1,function2.... as keys.
    this.register = function(newFunction) {
      this['function'+(++this.regFunctionsCount)] = newFunction;
    };
    //starts the execution of registered functions
    this.start = function() {
      for(var i = 1; i <= this.regFunctionsCount; i++) {
        this['function' + i]();
      }
    };

    this.callback = function() {
      alert("Main hoon callback");
      this.isCallbackExecuted = true;
    };

    this.callbackSetTimeAndExecute = function(time) {
      var self = this;
      setTimeout(function() {
        if(!self.isCallbackExecuted) {
          self.callback();
        }
      }, time);
    }

    this.markDone = function() {
      this.count++;
      if(this.count == this.regFunctionsCount) {
        alert('All functions executed.');

        if(!this.isCallbackExecuted) {
          this.callback();
        }
      }
    }
  }
})();
