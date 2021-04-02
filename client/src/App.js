import './App.css';
import UserLoginForm from './User/UserLoginForm';
import PublicView from './PublicView';
import PrivateRoute from './api/PrivateRoute';

function App() {
    return (
        <div className="App">
            <PublicView/>

        </div>
    );
}

export default App;
