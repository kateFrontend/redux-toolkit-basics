#  ![My Skills](https://skillicons.dev/icons?i=redux)  Redux Toolkit Basics

The **Redux Toolkit** package is intended to be the standard way to write Redux logic.
It can help you make your Redux code better.

Official source https://redux-toolkit.js.org/

## ⚡ Install 
```
npm install react react-redux

npm install @reduxjs/toolkit 
```

## 🦉 Terminology

Let's start! We need to follow a few steps.

- ### Create a Redux Store

You need to create a new folder (ex. "redux") and a file "store.js" in it.
Then add a quick start template: 

```
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {},
})
```
