import Button from "./Button"
const Header = ({title}) => {
    const onClick = (e) => {
        console.log(e)
    }
  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button color='green' text='Add' onClick={onClick}/>
    </header>
  )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

export default Header