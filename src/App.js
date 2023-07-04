import "./App.css";
import React from "react";
// {useState}
// function App() {
// react.use state is something called a hook

// below was chat GPTs answer which worked
// const [result, setResult] = useState("Yes");
// console.log(result);

// this is how scrimba video solved it below

// then we changed it from this to the const below
// const result = React.useState("Yes")

// we did it this way so we dont have to delcare [0] below , it should automataically know to start at the first item in the array

// in the next video we changed func to set becuase we ususally dont use words like func

// const [result, func] = React.useState("yes");
// if we use set we have to have set = to our first varaible IE setresult like below

// const [result, setResult] = React.useState("yes");

/**
 * Challenge:
 * 1. Create a function called `handleClick` that runs
 *    setIsImportant("No")
 * 2. add a click event listener to the div.state--value
 *    that runs `handleClick` when the div is clicked.
 */

// setResult ("yes")

// changed below const to the one above to use react state
// const result = React.useState('hello')
// console.log(result)
// this console.log above logs [undefined, ƒ()] to the console
// if we add a string inside the paraentheses, it changes from undefined to the string and  F like this ["Hello", ƒ()]

/**
 * Challenge: Replace our hard-coded "Yes" on the page with
 * some state initiated with React.useState()
 */
//   In the updated code:

// The useState hook is imported from the 'react' library along with the React import.
// The useState hook is used to declare the result state variable and the setResult function to update its value. The initial value is set to "Hello" as before.
// The value of result is logged to the console using console.log.
// Inside the JSX code, the result state variable is used within the <h1> element to display its value dynamically. This replaces the hard-coded "Yes".
// Now, the component will render the value of the result state variable within the <h1> element, which will be initially set to "Hello" based on the state initialization.

// created a new function with event listener to use our state

//   function handleClick(){
//     setResult('no')
//   }
//   return (
//     <div className="state">
//       <h1 className="state--title"> Is state important to know?</h1>
//       <div className="state--value" onClick={handleClick}>
//         {/* // scrimba video had us use a zero in brackets for the index of zero in an array but it worked without it probably cause there was only one word in the array  */}
//         <h1>{result}</h1>
//         {/* changed this h1 to the one above to {result } to call the state h1 hello */}
//         {/* <h1>Yes</h1> */}
//       </div>
//     </div>
//   );
// }
//counter with react

/**
 * Challenge: Set up state to track our count (initial value is 0)
 */

function App() {
  // we add react.state here to catch whatever inputs we put into an array has to an array
  // count is the first index and the  value being returned and the second index is the settter function

  const [count, setCount] = React.useState(0);
  /**
   * Challenge: Create a function called `add` that runs
   * when the + button is clicked. (Can just console.log("add") for now)
   */

  // we do the above challenge by adding a function called add and adding th onclick event listener to the plus button below but all the does is add the word add to the consloe for now
  
  
  function add() {
    // then we remove the console log statemonet sao we can the function that makes the counter work and add the numbr to the h1 element 
    // console.log("Add")
    /**
     * Challenge: 
     * See if you can think of a way to add 1 to the count
     * every time the + button is clicked
     */
    // count +1 will make the number go up one every time the plus sign is hit 
    // i wanted to use count ++ but thats forbiden in react? becuase it would diectly  change state?
   
   /// apparently the below functions arent the best practcce for state but do work

   // so we changed it to this below 
    //  this is how we first learned it but below is best practice setCount(count + 1)
// old value equals the old value of state changing to new this is best "practice" for some reason
    
// setCount(function(oldValue){
    //   return oldValue + 1

    // })



// or as destructured below 
setCount(prevCount => prevCount + 1)
 /**
     * Note: if you ever need the old value of state
     * to help you determine the new value of state,
     * you should pass a callback function to your
     * state setter function instead of using
     * state directly. This callback function will
     * receive the old value of state as its parameter,
     * which you can then use to determine your new
     * value of state.
     */

  }


  // I did below function myself and it worked

  // Challenge: update `substract` to use a callback function
  function minus() {
// setCount(count - 1)
// then i had to update it to below for bes practice or soe dumb shit 
setCount(prevCount => prevCount -1)
    
  }
  return (
    <div className="counter">
      <button className="counter--minus" onClick={minus}>–</button>
      <div className="counter--count">
        {/* we call the count value here so the funcction gets placed in the right place IE the h1 */}
        <h1>{count}</h1>
      </div>
      <button className="counter--plus" onClick={add}>+</button>
    </div>
  );
}

export default App;
