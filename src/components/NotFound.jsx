import React from 'react';
import { Link } from 'react-router-dom';

function NotFound (props) {
    return(
        <section className="section">
            <div className="container">
                <h1 className="title is-size-1">404</h1>
                <h2 className="subtitle is-italic">Page Not Found</h2>
                <Link to="/">Go Home</Link>
            </div>
        </section>
    );
}

export default NotFound;