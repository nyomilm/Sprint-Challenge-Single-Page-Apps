import React from "react";
import {Route} from 'react-router-dom';
import CharacterList from './CharacterList';
import LocationList from "./LocationsList";
import EpisodeList from './EpisodeList';
import WelcomePage from './WelcomePage';



const AppRouter = () => {
    return (
      <div>
        <Route path="/" exact component={WelcomePage} />
        <Route path="/characters" component={CharacterList} />
        <Route path="/locations" component={LocationList} />
        <Route path="/episodes" component={EpisodeList} />
        </div>
    )
}
export default AppRouter;
