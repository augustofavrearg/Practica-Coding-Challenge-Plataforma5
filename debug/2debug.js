/* 




var coder = {
    name:"Pedro",
    age:17
    }

function speakNow(coder){
          console.log(this.name);
    };

speakNow();
     */

var coder = {
          name: "Pedro",
          age: 17,
          speakNow() {
          console.log(this.name);
      }
    };
coder.speakNow();
    