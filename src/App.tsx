import { Container } from "@mui/material"
import Films from "./Films"
import Version from "./Version"

const App = () => {
  return (
    <Container maxWidth="sm">
      <Films />
      <Version />
    </Container>
  )
}

export default App
