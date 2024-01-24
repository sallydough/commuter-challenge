import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
return (
<nav className='nav'>
<Link to="/">Home</Link>
<Link to="/page2">Page 2</Link>
<Link to="/form">Form</Link>
</nav>
);
}

export default NavBar;