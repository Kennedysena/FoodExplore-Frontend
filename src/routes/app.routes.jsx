import { Route, Routes, Navigate } from "react-router-dom";

import { Home } from "../pages/Home";
import { Dish } from "../pages/Dish";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dish/:id" element={<Dish />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
}