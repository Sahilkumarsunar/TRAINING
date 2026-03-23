class MyPromise {

  constructor(executor){

     this.state = "pending";
     this.value = undefined;

     this.successCallbacks = [];
     this.errorCallbacks = [];

     const resolve = (value)=>{
        if(this.state === "pending"){
           this.state = "fulfilled";
           this.value = value;

           this.successCallbacks.forEach(fn => fn(value));
        }
     };

     const reject = (error)=>{
        if(this.state === "pending"){
           this.state = "rejected";
           this.value = error;

           this.errorCallbacks.forEach(fn => fn(error));
        }
     };

     executor(resolve, reject);

  }

  then(successFn,errorfn){
     this.successCallbacks.push(successFn);
     return this;
  }

  catch(errorFn){
     this.errorCallbacks.push(errorFn);
     return this;
  }

}