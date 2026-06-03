import ReduxCounter from "./ReduxCounter";
import { Provider } from "react-redux";
import { store } from "./store";

const ReduxApp = () => {
  return (
    <div>
      <h1>Learn Redux ToolKit</h1>
      <Provider store={store}>
        <ReduxCounter />
      </Provider>
    </div>
  );
};

export default ReduxApp;
