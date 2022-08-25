import {Link} from 'react-router-dom'
export default function Error(){
    return(
        <div>
            <h1></h1>
            <img src='https://www.computerhope.com/jargon/e/error.png'/>
            <h1>Error 404</h1>
            <h2>Page not found</h2>
            <Link to='/'>Home</Link>
        </div>
    )
}