const Singleton = (function () {
  let instance;

  function createInstance() {
    this.a = 10;
    this.b = 20;
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = new createInstance();
      }

      return instance;
    },
  };
})();

let s1 = Singleton.getInstance();
console.log(s1);
s1.b = 30;

let s2 = Singleton.getInstance();
console.log(s2);
