import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Sejarah from './Sejarah.js';
import Informasi from './Informasi1_pengumumanharilibur.js';
import Artikel1 from './Artikel1.js'
import Artikel2 from './Artikel2.js'
import Artikel3 from './Artikel3.js'
import Artikel4 from './Artikel4.js'
import Artikel5 from './Artikel5.js'


import Jadwal from './Jadwal.js'


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
      <Route exact path='/Artikel1' component={Artikel1}/>
      <Route exact path='/Artikel2' component={Artikel2}/>
      <Route exact path='/Artikel3' component={Artikel3}/>
      <Route exact path='/Artikel4' component={Artikel4}/>
      <Route exact path='/Artikel5' component={Artikel5}/>
      <Route exact path='/Informasi' component={Informasi}/>
      <Route exact path='/Galery' component={Galery}/>
      <Route exact path='/Sejarah' component={Sejarah}/>
      <Route exact path='/Contact_Us' component={Contact_Us}/>
    </Switch>
  </main>
)

export default Main
