import logo from "./logo.svg";
import "./App.css";
import SocialButton from "./components/SocialButton";
// react bootstrap
import { Container, Navbar, Nav } from "react-bootstrap";
// router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import Explore from "./components/explore";

function App() {
  let history = useHistory();
  const handleSocialLogin = (user) => {
    console.log(user);
    history.push("/explore");
  };

  const handleSocialLoginFailure = (err) => {
    console.error(err);
  };

  return (
    <div className="App">
      <Container>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="#home">Social Auth</Navbar.Brand>
        </Navbar>
      </Container>

      <Router>
        <Switch>
          <Route exact path="/">
            <h2>Social Login</h2>
            <SocialButton
              provider="facebook"
              appId="218157833392277"
              onLoginSuccess={handleSocialLogin}
              onLoginFailure={handleSocialLoginFailure}
              className="mb-3"
            >
              Login with Facebook
            </SocialButton>
            <br />
            <SocialButton
              provider="google"
              appId="15405703785-luj4gtqq3vcait69sgee3f4ebn32i5km.apps.googleusercontent.com"
              onLoginSuccess={handleSocialLogin}
              onLoginFailure={handleSocialLoginFailure}
              key={"google"}
              scope={"https://www.googleapis.com/auth/user.gender.read"}
            >
              Login with Google
            </SocialButton>
          </Route>
          <Route exact path="/explore">
            <Explore />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
