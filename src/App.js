import store from './reducer/store';
import { Provider } from 'react-redux';
import { GeneralView } from './pages/GeneralView';
import { NavBar } from './components/NavBar';

function App() {

    return (
        <Provider store={store}>
            <NavBar />
            <GeneralView />
        </Provider>
    );
}

export default App;
