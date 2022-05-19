import React               from 'react';
import { Provider }        from 'react-redux';
import generateStore       from './redux/store/store';
import { PrincipalRouter } from './routers/PrincipalRouter';

function App() {

    const store = generateStore();
    
    return (
        <Provider store={store}>
            <PrincipalRouter />
        </Provider>
    );
}

export default App;