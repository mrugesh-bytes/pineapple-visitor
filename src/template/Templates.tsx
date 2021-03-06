import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import OuterLayout from './outerlayout/OuterLayout';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import UnitPage from '../pages/UnitPage';
import TourFilterPage from '../pages/TourFilterPage';
import SelfGuidePage from '../pages/SelfGuidePage';
import ReservePage from '../pages/ReservePage';
import Confirm from '../components/reserve/confirm/Confirm';
import ForgotPasswordPage from '../pages/ForgotPasswordPage';
import ProtectedRoutes from './ProtectedRoutes';
import AppointmentPage from '../pages/AppointmentPage';
import {} from 'react-router-dom';

const Templates = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ProtectedRoutes />}>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Navigate to="/units" />} />
                        <Route path="/units" element={<UnitPage />} />
                        <Route path="/tour-filter" element={<TourFilterPage />} />
                        <Route path="/self-guide" element={<SelfGuidePage />} />
                        <Route path="/reserve" element={<ReservePage />} />
                        <Route path="/confirm" element={<Confirm />} />
                        <Route path="/appointments" element={<AppointmentPage />} />
                    </Route>
                </Route>

                <Route path="/" element={<OuterLayout />}>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<SignupPage />} />
                    <Route path="/forgot-password" element={<ForgotPasswordPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Templates;
