import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Header = () => {
	return (
		
	<nav className="navbar bg-body-tertiary mt-3">
        <div className="container-fluid">
          <a className="navbar-brand fs-3 fw-bold">Knowledge Cafe</a>
          <div className="d-flex" role="search">
            <img
              src="girl.svg"
              alt="Logo"
              width="50"
              height="50"
              className="d-inline-block align-text-top rounded-circle"
            />
          </div>
        </div>
      </nav>
  
		
	);
}


