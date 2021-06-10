import PropTypes from 'prop-types';
import Button from './Button'
const Header = ({title}) => {

    const onClick = () => {
        console.log('Clicked')
    }
    
    return (
        <div className="header">
            <h1 /* style={headingStyle} */>{title}</h1> 
            <Button text='Add' color='red' onClick={onClick} />          
        </div>
    )
}

Header.defaultProps = {
    title: "Task Tracker",
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

/* const headingStyle = {
    color: 'red',
    backgroundColor: 'black'
} */
export default Header
