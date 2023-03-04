import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import DefaultLayout from './layout/DefaultLayout/DefaultLayout';
import { publicRoutes } from './router';
function App() {
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    {publicRoutes.map((route, i) => {
                        const Page = route.component;
                        const Layout = DefaultLayout;
                        return (
                            <Route
                                key={i}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
