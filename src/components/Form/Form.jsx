import ColorForm from "./ColorForm"
import Select from "./Select"
import { SubmitButton } from "./Button.style"

// eslint-disable-next-line react/prop-types
const Form = ({ handleOnSubmit }) => {
  return (
    <form action="Palette" onSubmit={handleOnSubmit}>
        <ColorForm />
        <Select />
        <div className='nav'>
            <h2>Generate palette</h2>
            <div className='buttons'>
            <SubmitButton> Generate </SubmitButton>
            </div>
        </div>
    </form>
  )
}

export default Form