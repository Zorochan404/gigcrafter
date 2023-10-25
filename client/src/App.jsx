import useLocoScroll from './components/hooks/UseLocalScroll'
import './App.scss'
import Page1 from './pages/page1/Page1'
import CustomCursor from './customCursor/CustomCursor'
import Stack from './components/stack/Stack'

function App() {
useLocoScroll()

  return (
    <div className="app" id='app' data-scroll-container>
      <CustomCursor/>
      <Page1/>
    </div>
  )
}

export default App
