import { Route, BrowserRouter as Router, Routes as RouterRoutes } from "react-router-dom";
import Home from './pages/Home/Home';
import Question from './pages/Question/Question';
import QuestionProvider from './context/QuestionContext';
import Loading from './pages/Loading/Loading';
import Result from './pages/Result/Result';

function Routes() {

    return (
        <QuestionProvider>
            <Router>
                <RouterRoutes>

                    <Route index element={<Home />} />
                    <Route path="/question" element={
                        <Question />
                    }>
                    </Route>
                    <Route path="/loading" element={
                        <QuestionProvider>
                            <Loading forceLoading={true} />
                        </QuestionProvider>
                    }>
                    </Route>
                    <Route path="/result" element={
                        <Result />
                    }>
                    </Route>
                </RouterRoutes>
            </Router>
        </QuestionProvider>
    )
}
export default Routes;