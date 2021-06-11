import PropTypes from 'prop-types';
import Button from './Button'
const Header = ({title, onAdd, showAdd}) => {

    return (
        <header className="header">
            <h1 /* style={headingStyle} */>{title}</h1> 
            <Button text={showAdd ? 'Cancel' : 'Add'} 
               color={showAdd ? 'red' : 'green'} 
               onClick={onAdd} 
            />          
        </header>
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
