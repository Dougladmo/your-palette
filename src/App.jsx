import { useState, useEffect } from 'react'

import ColorForm from './components/Form/ColorForm'

import Palette from './components/Paleta/Palette'
import Header from './components/layout/Header/Header'

import './app.css'

import { SubmitButton } from './components/Form/Button.style'

function App() {
  const [firstColor, setFirstColor] = useState('#2D2D2D')
  const [secondColor, setSecondColor] = useState('#5B5B5B')
  const [thirdColor, setThirdColor] = useState('#8A8A8A')
  const [forthColor, setForthColor] = useState('#B8B8B8')
  const [fifthColor, setFifthColor] = useState('#E7E7E7')
  const [palette, setPalette] = useState([])

  // function handleChange(e) {
  //   setColor(e.target.value)
  //   setColor(Color.replace('#', ''))
  // }

  const getPalette = (e) => {
    e.preventDefault()
    let Color = e.target.color.value
    Color = Color.replace('#', '')
    let url = `https://www.thecolorapi.com/scheme?hex=${Color}&format=json&mode=analogic&count=5`
    // console.log(url)
    // console.log(Color)
    fetch(url , {
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
        console.log(palette)
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
            <div className='nav'>
              <h2>Generate palette</h2>
              <div className='buttons'>
                <SubmitButton>Generate</SubmitButton>
              </div>
            </div>
          </form>
          <Palette color1={firstColor} color2={secondColor} color3={thirdColor} color4={forthColor} color5={fifthColor} /> 
        </div>
    </div>
  )
}

export default App
