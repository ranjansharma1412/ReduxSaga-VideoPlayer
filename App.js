import React from 'react'
import RootNavigation from './src/RootNavigation'
import { Provider } from 'react-redux'
import store from './src/redux/Store'

/**
* @Component App.js
* @Use Root component
**/
const App = () => {
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  )
}

export default App