import { ThemeProvider } from "@mui/material/styles";
import ProtectedRoute from "components/ProtectedRoute/ProtectedRoute";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routeList } from "routes";
import { store } from "store";
import { theme } from "theme";
import { RSKProvider } from "context/rskContext";
import "./App.css";
import { CssBaseline } from "@mui/material";
import DefaultLayout from "layouts/DefaultLayout/DefaultLayout";
import { useRSK } from "./context/rskContext";

function App() {
  return (
    <RSKProvider>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AppContent />
        </ThemeProvider>
      </Provider>
    </RSKProvider>
  );
}

const AppContent = () => {
  const { account } = useRSK();
  return (
    <BrowserRouter>
      <Routes>
        {routeList.map(({ Component, ...route }) => {
          return (
            <Route
              key={route.url}
              path={route.url}
              element={
                route.protected ? (
                  <ProtectedRoute isAuth={!!account}>
                    <DefaultLayout>
                      <Component />
                    </DefaultLayout>
                  </ProtectedRoute>
                ) : (
                  <DefaultLayout>
                    <Component />
                  </DefaultLayout>
                )
              }
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
