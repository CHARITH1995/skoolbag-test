import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useLocation,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";

import HomePage from "./layouts/HomePage/HomePage";
import AddSchoolPage from "./layouts/AddSchoolPage/AddSchoolPage";
// import UpdateSchoolPage from "./layouts/UpdateSchoolPage/UpdateSchoolPage";
import SchoolPage from "./layouts/SchoolPage/SchoolPage";
import userprofile from "./layouts/UserProfile/UserProfile";


const App = () => {
  return (
    <Router>
      <ToastContainer />
      <Route path="/" exact component={HomePage} />
      <Route path="/school/view/:id"  component={SchoolPage} />
      <Route path="/school/add"  component={AddSchoolPage} />
      {/* <Route path="/school/update/:id"  component={UpdateSchoolPage} /> */}
      <Route path="/user"  component={userprofile} />
      {/* <Switch>
                {(localStorage.getItem('token')) ? <Route path="/Home" component={Home} /> : <Redirect to="/" />  }
            </Switch> */}
    </Router>
  );
};

export default App;
