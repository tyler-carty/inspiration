import Background from './components/Background'
import SlideEngine from './components/SlideEngine'
import './index.css'

export default function App() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <Background />
      <SlideEngine />
    </div>
  )
}
