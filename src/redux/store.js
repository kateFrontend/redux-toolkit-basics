// We will link this file with index.js so that any of our components can access the Store or the place where the necessary information will be stored.

import { configureStore } from '@reduxjs/toolkit'
import counter from './counter'

export const store = configureStore({
  reducer: {
    counter
  },
})