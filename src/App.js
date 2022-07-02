import "./App.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import SuperHero from "./components/SuperHero";
import RQSuperHero from "./components/RQSuperHero";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import SingleHero from "./components/singleHero";

function App() {
    const queryClient = new QueryClient();
    return (
        <>
            <Header />
            <QueryClientProvider client={queryClient}>
                <Routes>
                    <Route index element={<Home />}></Route>
                    <Route path="/super-hero" element={<SuperHero />}></Route>
                    <Route
                        path="/rq-super-hero"
                        element={<RQSuperHero />}
                    >
                    </Route>
                    <Route path="/rq-super-hero/:id" element={<SingleHero />}></Route>

                </Routes>
                <ReactQueryDevtools initialIsOpen={false} position={'bottom-right'}></ReactQueryDevtools>
            </QueryClientProvider>
        </>
    );
}

export default App;
