const { createSlice, configureStore } = require('@reduxjs/toolkit');

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
      value: 0
    },
    reducers: {
      incremented: state => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.value += 1
      },
      decremented: state => {
        state.value -= 1
      }
    }
  })
  
  const { incremented, decremented } = counterSlice.actions
  
  const store = configureStore({
    reducer: counterSlice.reducer
  })

  module.exports.store = store;
  module.exports.incremented = incremented;
  module.exports.decremented = decremented;