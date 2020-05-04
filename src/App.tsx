import * as React from "react";
import { store } from "./store";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import AppDrawer from "./components/Drawer/Drawer";

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <Provider store={store}>
      <Router>
        <AppDrawer />
      </Router>
    </Provider>
  );
};

export default App;
