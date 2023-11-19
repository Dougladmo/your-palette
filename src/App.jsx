import { useEffect, useReducer, useState } from 'react'

import Palette from './components/Paleta/Palette'
import Header from './components/layout/Header/Header'
import Footer from './components/layout/Footer/Footer'
import Form from './components/Form/Form'

import './app.css'

function App() {
  const [palette, setPalette] = useState([])
  const [paletteType, setpaletteType] = useState('')
  const [url, setUrl] = useState('https://www.thecolorapi.com/scheme?hex=b7d5e5&format=json&mode=analogic&count=5')
  
  const reducer = ( state, action ) => {
    switch (action.type){
      case 'setColors':
        return {
          ...state,
          firstColor: palette[0].hex.value,
          secondColor: palette[1].hex.value,
          thirdColor: palette[2].hex.value,
          forthColor: palette[3].hex.value,
          fifthColor: palette[4].hex.value,
        }
    }
  }

  const [state, dispatch] = useReducer(reducer , {
    firstColor: '',
    secondColor: '',
    thirdColor: '',
    forthColor: '',
    fifthColor: '',
  })
  
  
  function handleSubmit(e) {
    e.preventDefault()
    setpaletteType(e.target.mode.value)
    // cor da paleta
    let paletteColor = e.target.color.value
    paletteColor = paletteColor.replace('#', '')
    setUrl(`https://www.thecolorapi.com/scheme?hex=${paletteColor}&format=json&mode=${paletteType}&count=5`)
  }    

  useEffect(() => {
      fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setPalette(data.colors)
        dispatch( {type: 'setColors' } )
      })
      .catch((err) => console.log(err))
    }, [url, paletteType])

    const { firstColor, secondColor, thirdColor, forthColor, fifthColor } = state

  return (
    <div>
      <Header />
        <div className='main'>
          <Form handleOnSubmit={handleSubmit} />
          <Palette color1={firstColor} color2={secondColor} color3={thirdColor} color4={forthColor} color5={fifthColor} /> 
        </div>
        <Footer />
    </div>
  )
}

export default App
