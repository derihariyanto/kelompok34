import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';


const Info = () => <h2>Info</h2>;
const Profile = () => <h2>Profile</h2>;
const Schedule1 = () => <h2>Schedule1</h2>;
const Schedule2 = () => <h2>Schedule2</h2>;
const Schedule3 = () => <h2>Schedule3</h2>;
const About = () => <h2>About</h2>;
// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/Info' component={Info}/>
      <Route exact path='/Profile' component={Profile}/>
      <Route exact path='/Schedule/1' component={Schedule1}/>
      <Route exact path='/Schedule/2' component={Schedule2}/>
      <Route exact path='/Schedule/3' component={Schedule3}/>
      <Route exact path='/About' component={About}/>
    </Switch>
  </main>
)

export default Main
