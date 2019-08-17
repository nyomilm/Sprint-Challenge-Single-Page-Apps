import React from "react";
import {Route} from 'react-router-dom';

const AppRouter = () => {
    return (
      <div>
        <div className="App">
          <h1>Rick and Morty Fan Page</h1>
          <div>
            <Link to="/">Home Page</Link>
          </div>
          <div>
          <Link to="/characters">Characters</Link>
        </div>
        <div>
          <Link to="/locations">Locations</Link>
        </div>
        <div>
          <Link to="/episodes">Episodes</Link>
        </div>
      </div>
    </div>
  );
};

export default AppRouter;
