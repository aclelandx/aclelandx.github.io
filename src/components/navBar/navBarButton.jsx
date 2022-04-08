import { Link } from 'react-router-dom';


function NavButton (props){
    
    return (
        <Link className={props.content + `btn`} to={props.destination} >
            {props.content}
        </Link> 
    )
}

export default NavButton