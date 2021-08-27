import {BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import UsersPage from "./pages/UsersPage";
import DiscoverPage from "./pages/DiscoverPage";
import './App.css';
import Navbar from "./components/Navbar";
import {PageContext} from "./context";
import {useState} from "react";
import DietPage from "./pages/DietPage";

function App() {
    const [curr_user, setCurrUser] = useState();
    const [modal, setModal] = useState(false);
    const [pathname, setPathName] = useState(window.location.pathname);

    return (
        <PageContext.Provider value={{
            curr_user,
            setCurrUser,
            modal,
            setModal,
            pathname,
            setPathName
        }}>
            <BrowserRouter>
                <div className="app">
                    <Navbar />
                    <Switch>
                    <Route exact path="/discover">
                        <DiscoverPage />
                    </Route>
                    <Route exact path="/">
                        <UsersPage />
                    </Route>
                    <Route exact path="/diet">
                        <DietPage />
                    </Route>
                    <Redirect to="/"/>
                    </Switch>
                </div>
            </BrowserRouter>
        </PageContext.Provider>
  );
}

export default App;
