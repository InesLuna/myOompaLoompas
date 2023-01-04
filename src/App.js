import store from './reducer/store';
import { Provider } from 'react-redux';
import { GeneralView } from './pages/GeneralView';

function App() {

    

    return (
        <Provider store={store}>
            <GeneralView />
        </Provider>
    );
}

export default App;
