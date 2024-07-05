import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Context } from './store/appContext';
import Home from './views/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/scrollToTop';

function App() {
  return (
    
      <Router>
        <ScrollToTop>
          <Navbar />
          <div className="container mt-4">
            <Switch>
              <Route  path="/" component={Home} />
             <Route path="/" component={""} />
            </Switch>
          </div>
          <Footer />
        </ScrollToTop>
      </Router>
  
  );
}

export default App;
