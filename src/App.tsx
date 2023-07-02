import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { mainRoute } from './router/mainRoute'

const App = () => (
  <div>
    <RouterProvider router={mainRoute} />
  </div>
)

export default App