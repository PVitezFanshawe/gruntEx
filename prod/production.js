var myApp = {
  mainMessage : "Welcome to my app!",

  mainGreeting(){
    console.log('hey! welcome to my app');
  }
};

myApp.module1 = {
  saySomething(message) {
    console.log(myApp.mainMessage, message, "I am a module!");
  },
  doSomething() {
    console.log('called doSomething from module1');
  }
};

myApp.module1 = {
  doSomethingElse() {
    console.log('called doSomethingElse from module2');
  }
};

(() => {
  myApp.mainGreeting();

  myApp.module1.saySomething('oh hello');

  function myFunc(){
    var theHeading = document.querySelector('h1').textContent = myApp.mainMessage;
  };
  myFunc();
})();
