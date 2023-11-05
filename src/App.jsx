import ColorForm from './components/Form/ColorForm'

import Palette from './components/Paleta/Palette'
import Header from './components/layout/Header/Header'

import './app.css'

import { SubmitButton } from './components/Form/Button.style'

function App() {

  return (
    <div>
      <Header />
        <div className='main'>
          <form action="Palette">
            <ColorForm/>
            <div className='nav'>
              <h2>Gerar Paleta</h2>
              <div className='buttons'>
                <SubmitButton>Tons Pastéis</SubmitButton>
                <SubmitButton>Tons frios</SubmitButton>
                <SubmitButton>Tons quentes</SubmitButton>
                <SubmitButton>Tom aleatório</SubmitButton>
              </div>
            </div>
          </form> 
          <Palette /> 
        </div>
    </div>
  )
}

export default App
