import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';

import header_css from './assets/header.css';
import footer_css from './assets/footer.css';

import sejarah_css from './assets/sejarah.css';
import style_css from './assets/style.css';

	render((
	  <BrowserRouter>
	    <App />
	  </BrowserRouter>
	), document.getElementById('root'));	

