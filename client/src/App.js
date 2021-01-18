import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './style.scss';
import MyPolicy from './Components/MyPolicy';
import SignIn from './Components/SignIn';

function App() {
    const [data, setData] = useState({});
    const [error, setError] = useState(false);
    return (
        <Router>
            <Switch>
                <Route
                    data-testid="home-route"
                    path="/"
                    exact
                    render={() => (
                        <SignIn
                            setData={setData}
                            error={error}
                            setError={setError}
                        />
                    )}
                />
                <Route
                    path="/MyPolicy"
                    exact
                    render={() => (
                        <MyPolicy
                            setData={setData}
                            data={data}
                            setError={setError}
                        />
                    )}
                />
            </Switch>
        </Router>
    );
}

export default App;
