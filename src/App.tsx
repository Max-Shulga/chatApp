import {ReactElement} from "react";
import {useThemeContext} from "@/theme/ThemeContextProvider";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import RouteNames from "@/routes/routes-names";
import SignIn from "@/views/Sign-in/SignIn";
import UpworkFeed from "@/views/UpworkFeed/UpworkFeed";
import FeedsLayout from "@/layout/FeedsLayout";
import FeedPage from "@/views/upworkFeedDetail/FeedPage";
import Chat from "@/views/Chat/Chat";
import AuthGuard from "@/components/AuthGuard";

function App(): ReactElement {
    const {theme} = useThemeContext();

    return (<ThemeProvider theme={theme}>
        <CssBaseline/>
        <BrowserRouter>
            <Routes>
                <Route path={RouteNames.SIGN_IN} element={<SignIn/>}/>
                <Route element={
                    <AuthGuard>
                        <FeedsLayout/>
                    </AuthGuard>}>
                    <Route path={RouteNames.UPWORK_FEED} element={<UpworkFeed/>}/>
                    <Route
                        path={RouteNames.UPWORK_FEED_DETAIL}
                        element={<FeedPage/>}
                    />
                    <Route path={RouteNames.CHAT} element={<Chat/>}/>
                </Route>
                <Route
                    path="*"
                    element={<Navigate to={RouteNames.UPWORK_FEED} replace/>}
                />
            </Routes>
        </BrowserRouter>
    </ThemeProvider>)

}

export default App;
