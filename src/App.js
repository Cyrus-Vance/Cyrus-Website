import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Loadable from '@docusaurus/react-loadable';

import "./Styles/App.less";

function Loading() {
    return <div>加载中...</div>;
}

const ErrorPage = Loadable({
    loader: () => import('./Pages/ErrorPage'),
    loading: Loading,
});
const IndexPage = Loadable({
    loader: () => import('./Pages/IndexPage'),
    loading: Loading,
});

class App extends Component {
    render() {
        return (
            <>
                <Router>
                    <Switch>
                        <Route exact path='/'>
                            <IndexPage />
                        </Route>
                        <Route component={ErrorPage}></Route>
                    </Switch>
                </Router>
            </>
        );
    }
}

export default App;