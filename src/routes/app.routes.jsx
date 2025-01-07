import { Route, Routes, Navigate } from "react-router-dom";

import { Home } from "../pages/Home";
import { Dish } from "../pages/Dish";
import { Payment } from "../pages/Payment";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/dish" element={<Dish />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
}