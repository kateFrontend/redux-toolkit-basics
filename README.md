#  ![My Skills](https://skillicons.dev/icons?i=redux)  Redux Toolkit Basics

The **Redux Toolkit** package is intended to be the standard way to write Redux logic.
It can help you make your Redux code better.

Official source https://redux-toolkit.js.org/

## ⚡ Install 
```
npm install react react-redux

npm install @reduxjs/toolkit 
```

## 🦉 Create a simple counter app

Let's start learning Redux Toolkit by creating a simple mini Redux counter app.\
We need to follow a few steps:

- ### Create a Redux Store

You need to create a new folder (ex. "redux") and a file "store.js" in it.
Then add a quick start template: 

```
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {},
})
```

- ### Provide the Redux Store to React
  
Once the store is created, we can make it available to our React components by putting a React-Redux Provider around our application in src/index.js. Import the Redux store we just created, put a Provider around your App, and pass the store as a prop:

```
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { store } from './app/store'
import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
```

- ### Create a Redux State Slice

Add a new file counter.js and import the "createSlice" API from Redux Toolkit.

```
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer
```
- ### Display app
  
Let's display our app in App.js. \
To see it live tap this command in terminal:

```
npm start
```

In the App.js import necessary hooks and functions and create buttons:

```
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./redux/counter";

function App() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Score: {count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

export default App;
```

Let's add some more buttons. \
We need to import incrementByAmount from redux/counter.

```
import { decrement, increment, incrementByAmount } from "./redux/counter";
```
And create a new button that will increase our value by 5.

``` 
<button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
```

Ok. Now let's add a new button that will decrement our value by 5.

First we need to create a new reducer in the counter.js and export it:

```
decrementByAmount: (state, action) => {
    state.count -= action.payload
    },

export const { increment, decrement, incrementByAmount, decrementByAmount } = counterSlice.actions

```
Now we need to import it in App.js and create a new button: 

```
<button onClick={() => dispatch(decrementByAmount(5))}>-5</button>
```

And what we need to do if we need one more button that multiply our value by 5?

Right! We need to make the same steps as before. Take a look in the counter.js and App.js files.

