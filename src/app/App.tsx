import { router } from "./providers/router-provider"
import { ThemeProvider } from "./providers/theme-provider"
import { RouterProvider } from 'react-router-dom'

function App() {

  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <RouterProvider  router={router}/>
    </ThemeProvider>
  )
}

export default App
