import React from 'react';
import './app.scss';
import Page from './pages/page';
//import background from './assets/imgs/background.png';
import background from './assets/imgs/background.png';



const App = () => {
return (
        <div className="app">
            <div className = 'page-container' style = {{background: `url(${background}) repeat`}}>
                <Page />
            </div>
        </div>
    
    )
}

export default App
