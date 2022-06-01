import App from './App';
import { Route, BrowserRouter as Router, Routes as RouterRoutes } from "react-router-dom";
import Question from './pages/Question';
import Home from './pages/Home';

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