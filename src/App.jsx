import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "redux/store";

import Phonebook from "./modules/Phonebook/Phonebook";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <>
          <Phonebook />
        </>
      </PersistGate>
    </Provider>
  );
};

export default App;