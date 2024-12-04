import Labs from "./Labs";
import Kanbas from "./Kanbas";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import store from "./Kanbas/store";
import { Provider } from "react-redux";
import AssignmentEditor from "./Kanbas/Courses/Assignments/AssignmentEditor";

function App() {
  return (
    <HashRouter>
      <Provider store={store}>
        <div>
          <Routes>
            <Route path="/" element={<Navigate to="Labs" />} />
            <Route path="/Labs/*" element={<Labs />} />
            <Route path="/Kanbas/*" element={<Kanbas />} />
            <Route path="/Kanbas/Courses/:cid/Assignments/new" element={<AssignmentEditor />} />
          </Routes>
        </div>
      </Provider>
    </HashRouter>
  );
}
export default App;
