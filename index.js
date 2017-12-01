'use strict';

// Import React base modules
import React from 'react';
import ReactDom from 'react-dom';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

//Views
 import Root from './src/components/RootPage.jsx';
 import SingleProject from './src/components/SingleProjectPage.jsx';
 import NavigationBar from './src/components/NavigationBar.jsx';

ReactDom.render((
  <BrowserRouter>
        <div>
          <Route exact path="/" component={Root} />
          <Route path="/project" component={SingleProject} />
          {/* <Route path="/catalog" component={CatalogView} />
          <Route path="/product/:id" component={ProductView} /> */}
          <Route path="/nested" component={NavigationBar} />
        </div>
    {/* <Switch>
      <Route exact path="/" component={Root} />
      <Route path="/project" component={SingleProject}/>
    </Switch> */}
  </BrowserRouter>
  // Here is how query can be hidden: https://stackoverflow.com/questions/42089626/how-to-hide-query-string-parameter-in-reactjs-react-router
  // Check this code in Navigation object it if will be possible to hide final url
  //   .makePath('about') // return URL
  //   .makeHref('about') // return URL

),
  document.getElementById('root')
);
