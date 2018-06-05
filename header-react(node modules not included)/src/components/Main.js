import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Sejarah from './Sejarah.js';


const Jadwal = () => <h2>Jadwal</h2>;
const Artikel = () => <h2>Artikel</h2>;
const Informasi = () => <h2>Informasi</h2>;
const Galery = () => <h2>Galery</h2>;
const Contact_Us = () => <h2>Contact_Us</h2>;
// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/Jadwal' component={Jadwal}/>
      <Route exact path='/Artikel' component={Artikel}/>
      <Route exact path='/Informasi' component={Informasi}/>
      <Route exact path='/Galery' component={Galery}/>
      <Route exact path='/Sejarah' component={Sejarah}/>
      <Route exact path='/Contact_Us' component={Contact_Us}/>
    </Switch>
  </main>
)

export default Main
