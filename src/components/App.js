import './App.css';
import Header from './Header/Header.js';
import Typing from './Typing/Typing.js';
import Setup from './Setup/Setup.js';
import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';

function App() {

    return (
        <div className='app'>
            <HashRouter>
                <Header />
                
                <Switch>
                    <Route path='/:test_text/:test_duration'>
                        <Typing />
                    </Route>

                    <Route path='/'>
                        <Setup />
                    </Route>
                </Switch>
            </HashRouter>
        </div>
    );
}

export default App;