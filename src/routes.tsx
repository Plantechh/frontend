import App from './App';
import { Route, BrowserRouter as Router, Routes as RouterRoutes } from "react-router-dom";
import Home from './pages/Home/Home';
import Question from './pages/Question/Question';

function Routes() {

    return (
        <Router>
            <RouterRoutes>
                <Route index element={<Home />} />
                <Route path="/question" element={<Question />} />
            </RouterRoutes>
        </Router>
    )
}
export default Routes;