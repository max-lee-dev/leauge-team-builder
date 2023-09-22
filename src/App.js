import React from 'react';
import {Routes, Route, BrowserRouter as Router} from 'react-router-dom';
import {Box} from '@chakra-ui/react';
import Builder from './pages/Builder';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Builder/>}/>
            </Routes>
        </Router>
    );
}

export default App;
