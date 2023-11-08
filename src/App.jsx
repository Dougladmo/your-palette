import { useState, useEffect } from 'react'

import ColorForm from './components/Form/ColorForm'

import Palette from './components/Paleta/Palette'
import Header from './components/layout/Header/Header'

import './app.css'

import { SubmitButton } from './components/Form/Button.style'
import Select from './components/Form/Select'
import Footer from './components/layout/Footer/Footer'

function App() {
  const [firstColor, setFirstColor] = useState('#FF1D44')
  const [secondColor, setSecondColor] = useState('#FBEBAF')
  const [thirdColor, setThirdColor] = useState('#74BF9D')
  const [forthColor, setForthColor] = useState('#56A292')
  const [fifthColor, setFifthColor] = useState('#E7E7E7')
  const [mode, setMode] = useState('analogic-complement')
  const [palette, setPalette] = useState([])

  // function handleChange(e) {
  //   setColor(e.target.value)
  //   setColor(Color.replace('#', ''))
  // }
  
    function getPalette(e) {
      e.preventDefault()
      // tipo de paleta
      setMode(e.target.mode.value)
      // cor da paleta
      let Color = e.target.color.value
      Color = Color.replace('#', '')
      // url da paleta
    let url = `https://www.thecolorapi.com/scheme?hex=${Color}&format=json&mode=${mode}&count=5`
    fetch(url, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setPalette(data.colors)
        setFirstColor(palette[0].hex.value)
        setSecondColor(palette[1].hex.value)
        setThirdColor(palette[2].hex.value)
        setForthColor(palette[3].hex.value)
        setFifthColor(palette[4].hex.value)
        // console.log(data)
        // console.log(data)
      })
      .catch((err) => console.log(err))
    }

  return (
    <div>
      <Header />
        <div className='main'>
          {/* componentizar form em apenas 1 componente */}
          <form action="Palette" onSubmit={getPalette}>
            <ColorForm />
            <Select />
            <div className='nav'>
              <h2>Generate palette</h2>
              <div className='buttons'>
                <SubmitButton >Generate</SubmitButton>
              </div>
            </div>
          </form>
          <Palette color1={firstColor} color2={secondColor} color3={thirdColor} color4={forthColor} color5={fifthColor} /> 
        </div>
        <Footer />
    </div>
  )
}

export default App
