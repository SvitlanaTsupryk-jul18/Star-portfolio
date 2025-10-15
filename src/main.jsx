import { createRoot } from 'react-dom/client'
import './styles.scss'
import { App } from './App'
import { MdEmail } from 'react-icons/md';

function Root() {
  return (
    <>
      <App />
      <div style={{ position: 'absolute', pointerEvents: 'none', top: 0, left: 0, width: '100vw', height: '100vh' }}>
        <a href="mailto:stsupryk@gmail.com" target="_blank" style={{ position: 'absolute', bottom: 60, left: 40, fontSize: '16px', color: '#fdfdfd' }}>
        <MdEmail style={{ display: 'inline-block', marginBottom: -3, marginRight: 10, width: 20, height: 20, fill: '#fdfdfd' }} />
          Svitlana Tsupryk
        </a>
        <div style={{ position: 'absolute', bottom: 60, right: 40, fontSize: '16px', color: '#fdfdfd' }}>Click on ball</div>
        <div style={{ position: 'absolute', top: 50, left: 40, fontSize: '16px', color: '#fdfdfd' }} href="#">
          Scroll down 
        </div>
      </div>
    </>
  )
}

createRoot(document.getElementById('root')).render(<Root />)
