import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import All from './All'
import Add from './Add'
import Delete from './Delete'

const Index = () => {
    return (
        <>
            <div>
                <a href="/all">Show all</a>
                <br/>
                <a href="/add">Add one</a>
                <br/>
                <a href="/delete">Delete by id</a>
                <br/>
                <br/>
            </div>

            <Router>
                <Switch>
                    <Route exact path="/all" component={All}/>
                    <Route exact path="/add" component={Add}/>
                    <Route exact path="/delete" component={Delete}/>
                </Switch>
            </Router>
        </>
    )
}

export default Index;