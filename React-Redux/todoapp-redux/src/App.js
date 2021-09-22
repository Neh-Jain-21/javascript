/** @format */

import { useState, lazy, Suspense } from "react";
import { HashLoader } from "react-spinners";
import { useSelector } from "react-redux";
//css
import "./App.css";
//components
const Navbar = lazy(() => import("./components/Navbar"));
const Heading = lazy(() => import("./components/Heading"));
const Tabs = lazy(() => import("./components/Tabs/index"));
const Snacks = lazy(() => import("./components/Snacks"));

const App = () => {
    //states
    const [openSearch, setOpenSearch] = useState(false);

    //from redux store
    const darkMode = useSelector((state) => {
        return state.themeReducer.darkMode;
    });

    //change body color
    if (darkMode) {
        document.body.style.backgroundColor = "black";
    } else {
        document.body.style.backgroundColor = "white";
    }

    //for search bar
    const handleOpenSearch = () => {
        setOpenSearch(true);
    };

    const handleCloseSearch = () => {
        setOpenSearch(false);
    };

    return (
        <Suspense
            fallback={
                <HashLoader
                    color={"#3656D7"}
                    loading={true}
                    css={
                        "display:flex;height:100vh;flex-direction:row;align-items:center;margin-left:49vw;"
                    }
                />
            }
        >
            <>
                <Navbar handleOpenSearch={handleOpenSearch} />
                <Heading />
                <Tabs
                    openSearch={openSearch}
                    handleCloseSearch={handleCloseSearch}
                />
                <Snacks />
            </>
        </Suspense>
    );
};

export default App;
