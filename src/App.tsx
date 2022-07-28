import React, { useContext } from "react";
import { Provider } from "react-redux";
import "./App.css";
import store from "./redux/store";
import Templates from "./template/Templates";
import "./components/core/axios/Interceptor";
import { AppContext } from "./components/context/AppContect";

function App() {
    const appContect = useContext(AppContext);

    return (
        <Provider store={store}>
            <AppContext.Provider value={appContect}>
                <div className="App">
                    <Templates />
                </div>
            </AppContext.Provider>
        </Provider>
    );
}

export default App;
