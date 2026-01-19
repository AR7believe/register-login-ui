import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import "./styles.css";


export default function App() {
return (
<BrowserRouter>
<Routes>
<Route path="/" element={<Login />} />
<Route path="/register" element={<Register />} />
</Routes>
</BrowserRouter>
);
}