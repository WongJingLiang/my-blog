import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="notFound">
            <h2>Sorry, but that page cannot be found</h2>
            <Link to='/'>Back to the homepage</Link>
        </div>
    );
}
 
export default NotFound;