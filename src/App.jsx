import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";
import CompaniesPage from "./pages/CompaniesPage";
import CoursesPage from "./pages/CoursesPage";
import { JobsPage } from "./pages/JobsPage";
import ResetPassword from "./pages/ResetPassword";
import EditProfilePage from "./pages/EditProfilePage";
import WelcomePage from "./pages/WelcomePage";
import { useSelector } from "react-redux";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import ProfilePage from "./pages/ProfilePage";
import CoursesPage2 from "./pages/CoursesPage2";
import ApplicationsPage from "./pages/ApplicationsPage";

function App() {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    return (
        <>
            <Router>
                <Routes>
                    <Route exact path="/" element={<HomePage />} />

                    <Route
                        exact
                        path="/register"
                        element={<RegistrationPage />}
                    />
                    <Route exact path="/login" element={<LoginPage />} />
                    <Route exact path="/reset" element={<ResetPassword />} />
                    <Route
                        element={
                            <PrivateRoute isAuthenticated={isAuthenticated} />
                        }
                    >
                        <Route
                            exact
                            path="/companies"
                            element={<CompaniesPage />}
                        />
                        <Route exact path="/jobs" element={<JobsPage />} />
                        <Route
                            exact
                            path="/courses"
                            element={<CoursesPage />}
                        />
                        <Route
                            exact
                            path="/profile"
                            element={<ProfilePage />}
                        />

                        <Route
                            exact
                            path="/welcome"
                            element={<WelcomePage />}
                        />
                        <Route
                            exact
                            path="/courses/all"
                            element={<CoursesPage2 />}
                        />
                        <Route
                            exact
                            path="/profile/edit"
                            element={<EditProfilePage />}
                        />
                        <Route
                            exact
                            path="/applications"
                            element={<ApplicationsPage />}
                        />
                    </Route>
                </Routes>
            </Router>
        </>
    );
}

export default App;
