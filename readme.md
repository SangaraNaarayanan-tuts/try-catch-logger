
# try-catch-logger

A utility package for handling repetitive try-catch blocks, compatible with both asynchronous and synchronous functions, featuring standard logging formats.


## Badges

Add badges from somewhere like: 
This is an open-source package with a MIT License.

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)


## Authors

- [@SangaraNaarayanan-tuts](https://www.github.com/SangaraNaarayanan-tuts)


## Usage/Examples
It is compatible with both asynchronous and synchronous functions you dont have to provide any specific properties. It automatically identifies the type of the function.

### How to use
- Pass the function as 0 th argument
- Pass rest of the arguments to the respective function

### What will be returned
- **status** - Function Execution Status -> true, false
- **data**   - Anything returned from the function
- **error**  - Error occured in the function

### Arguments

```javascript
// Arguments order is mainter same as what you pass to main function
tryCatchLogger(anyFunction, param1, param2);
```

### sync example
```javascript
const tryCatchLogger = require('try-catch-logger');

async function sampleSyncFunc (param1){
    console.log("hello", param1);
    return sampleSync    
}
function mainFunc(){
    let {status, data, error} = tryCatchLogger(sampleSyncFunc, 2)
    console.log(status) // Function Execution Status -> true, false
    console.log(data) // Anything returned from the function 
    console.log(error) // Error occured in the function
}
```

### async example
```javascript
const tryCatchLogger = require('try-catch-logger');

async function sampleAsyncFunc (param1){
    let sampleAsync = await fetch('https://jsonplaceholder.typicode.com/todos/'+ 'param1')
    return sampleAsync    
}
async function mainFunc(){
    let {status, data, error} = await tryCatchLogger(sampleAsyncFunc, 2)
    console.log(status) // Function Execution Status -> true, false
    console.log(data) // Anything returned from the function provided
    console.log(error) // Error occured in the function
}

mainFunc()
```


## Feedback

If you have any feedback, please reach out to us at sangartuts@gmail.com

