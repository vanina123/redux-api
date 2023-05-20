import { Provider } from "react-redux";
import store from "./store";
import UsersList from "./components/users";
const App = () => {
  return (
    <Provider store={store}>
      <UsersList />
    </Provider>
  );
};

export default App;