import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Contact from './Contact';
import Error from './Error';
import Navbar from './Navbar';
import User from './User';
import Search from './Search';

const App = () => {
    return (
        <>
            <Navbar />
            <div className="main">
                <Switch>
                    <Route exact path="/image-search-app/" component={Home} />
                    <Route exact path="/image-search-app/about" component={About} />
                    <Route exact path="/image-search-app/contact" component={Contact} />
                    <Route exact path="/image-search-app/user/:fname/:lname" component={User} />
                    <Route exact path="/image-search-app/search" component={Search} />
                    <Route component={Error} />
                </Switch>
            </div>
        </>
    );
};

export default App;