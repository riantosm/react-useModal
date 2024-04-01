import { useEffect, useState } from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { routeName } from "./constants";
import { useMySelector } from "./sideEffect";
import Modal from "./components/Atoms/Modal";
import { About, Home } from "./pages";

const CommonFunctionality = () => {
  const {} = useMySelector();
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (authentication.isLogin) {
  //     //
  //   } else navigate(routeName.Home);
  // }, [authentication.isLogin]);

  return <Modal />;
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const {} = useMySelector();

  useEffect(() => {
    // baseAPI.defaults.headers.common[
    //   "authorization"
    // ] = `Bearer ${authentication.token}`;
    // setTimeout(() => {
    //   setIsLoading(false);
    // }, 100);
  }, []);

  // if (isLoading) return <p>wiat</p>;

  return (
    <>
      <Router>
        <CommonFunctionality />
        <ScrollToTop />
        <Routes>
          <Route path={routeName.Home} element={<Home />} />
          <Route path={routeName.About} element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
