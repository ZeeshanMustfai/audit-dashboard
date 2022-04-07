import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import Documents from "./components/documents/Documents";
import Login from "./components/registeration/Login";
import Reports from "./components/reports/Reports";
import Requests from "./components/requests/Requests";
import Setting from "./components/setting/Setting";
import Sidebar from "./layout/Sidebar";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Sidebar>
            <Dashboard />
          </Sidebar>
        }
      />
      <Route
        path="/dashboard"
        element={
          <Sidebar>
            <Dashboard />
          </Sidebar>
        }
      />
      <Route
        path="/requests"
        element={
          <Sidebar>
            <Requests />
          </Sidebar>
        }
      />
      <Route
        path="/reports"
        element={
          <Sidebar>
            <Reports />
          </Sidebar>
        }
      />
      <Route
        path="/documents"
        element={
          <Sidebar>
            <Documents />
          </Sidebar>
        }
      />
      <Route
        path="/setting"
        element={
          <Sidebar>
            <Setting />
          </Sidebar>
        }
      />
    </Routes>
  );
}

export default App;
