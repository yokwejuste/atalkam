import React from 'react';
import AppContext from "./components/AppContext/AppContext";


function App() {
    return (
        <div className="App">
            <AppContext.Provider
                value={{}}>
            </AppContext.Provider>
        </div>

    );
}

export default App;


