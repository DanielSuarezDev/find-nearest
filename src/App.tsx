import { Suspense } from "react"

import { Router } from "./routes"
import { Loader } from "./Components"
import { AuthWrapper } from "./AuthWrapper"

function App() {
  return (
    <AuthWrapper>
      <Suspense fallback={<Loader />}>
        <Router />
      </Suspense>
    </AuthWrapper>
  )
}

export default App
