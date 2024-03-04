import Link from "next/link";
import '../styles/global.css';

const NotFound = () => {
    return (
        <div className="not-found">
            <h1>404 | Opps...</h1>
            <h2>This page cannot be found :((</h2>
            <p>Go back to home page <Link href='/'>Home</Link></p>
        </div>
    )
};

export default NotFound;