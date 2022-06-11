import { Route, BrowserRouter as Router, Routes as RouterRoutes } from "react-router-dom";
import Home from './pages/Home/Home';
import Question from './pages/Question/Question';
import QuestionProvider from './context/QuestionContext';
import Loading from './pages/Loading/Loading';
import Result from './pages/Result/Result';
import Share from './pages/Share/Share';

function Routes() {

    return (
        <Router>
            <RouterRoutes>
                <Route index element={<Home />} />
                <Route path="/question" element={
                    <QuestionProvider>
                        <Question />
                    </QuestionProvider>
                }>
                </Route>
                <Route path="/loading" element={
                    <Loading forceLoading={true} />
                }>
                </Route>
                <Route path="/result" element={
                    <Result />
                }>
                </Route>
                <Route path="/share" element={
                    <Share />
                }>
                </Route>
            </RouterRoutes>
        </Router>
    )
}
export default Routes;