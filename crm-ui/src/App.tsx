import { BrowserRouter as Router, Route, Routes } from 'react-router-dom' // Assuming you are using BrowserRouter
import './App.css'
import Maincomponent from './component/maincomponent'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Maincomponent />} />
      </Routes>
    </Router>
  )
}

export default App
