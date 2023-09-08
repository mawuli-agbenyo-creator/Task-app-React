import PropTypes from 'prop-types'
const Button = ({color, text, onClick}) => {
    
  return (
    <button  style={{backgroundColor:color}} 
    className='btn' 
    onClick={onClick}
    >{text}

    </button>
  )
}

Button.defaultProps = {
    color:'#03A9F4',

}

Button.protoTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    Onclick: PropTypes.func
}
export default Button