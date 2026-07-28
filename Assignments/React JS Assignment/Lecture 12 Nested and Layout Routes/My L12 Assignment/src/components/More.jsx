import React from 'react';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import CrmDashboardLayout from '../pages/CrmDashboardLayout/CrmDashboardLayout';
import Customers from '../pages/CrmDashboardLayout/Customers';
import Leads from '../pages/CrmDashboardLayout/Leads';
import Sales from '../pages/CrmDashboardLayout/Sales';
import CrmReports from '../pages/CrmDashboardLayout/CrmReports';
import CrmSettings from '../pages/CrmDashboardLayout/CrmSettings';
import BlogDashboardLayout from '../pages/BlogDashboardLayout/BlogDashboardLayout';
import Blog from '../pages/BlogDashboardLayout/Blog';
import AllPosts from '../pages/BlogDashboardLayout/AllPosts';
import AddPost from '../pages/BlogDashboardLayout/AddPost';
import Categories from '../pages/LibraryPortalLayout/Categories';
import Comments from '../pages/BlogDashboardLayout/Comments';
import UserManagement from '../pages/BlogDashboardLayout/UserManagement';
import DashboardLayout from '../pages/UserManagement/DashboardLayout';
import UsersPage from '../pages/UserManagement/UsersPage';
import UserProfile from '../pages/UserManagement/UserProfile';
import UserSettings from '../pages/UserManagement/UserSettings';
import UserActivity from '../pages/UserManagement/UserActivity';
import HrLayout from '../pages/HRDashboardLayou/HrLayout';
import HrDashboard from '../pages/HRDashboardLayou/HrDashboard';
import EmployeeRecords from '../pages/HRDashboardLayou/EmployeeRecords';
import LeaveManagement from '../pages/HRDashboardLayou/LeaveManagement';
import Payroll from '../pages/HRDashboardLayou/Payroll';
import PerformanceReviews from '../pages/HRDashboardLayou/PerformanceReviews';
import TravelLayout from '../pages/TravelBookingDashboardLayout/TravelLayout';
import TravelDashboard from '../pages/TravelBookingDashboardLayout/TravelDashboard';
import Flights from '../pages/TravelBookingDashboardLayout/Flights';
import Hotels from '../pages/TravelBookingDashboardLayout/Hotels';
import Bookings from '../pages/TravelBookingDashboardLayout/Bookings';
import Payments from '../pages/TravelBookingDashboardLayout/Payments';
import CustomerSupport from '../pages/TravelBookingDashboardLayout/CustomerSupport';
import FoodAdminLayout from '../pages/FoodDeliveryAdminPanel/FoodAdminLayout';
import FoodOrders from '../pages/FoodDeliveryAdminPanel/FoodOrders';
import FoodRestaurants from '../pages/FoodDeliveryAdminPanel/FoodRestaurants';
import FoodDeliveryPartners from '../pages/FoodDeliveryAdminPanel/FoodDeliveryPartners';
import FoodCustomers from '../pages/FoodDeliveryAdminPanel/FoodCustomers';
import FoodReports from '../pages/FoodDeliveryAdminPanel/FoodReports';
import Task19Layout from '../pages/IndexRouteImplementation/Task19Layout';
import { Task19Home, Task19Products, Task19Settings, Task19Users } from '../pages/IndexRouteImplementation/Task19Pages';
import EnterpriseLayout from '../pages/EnterpriseSubComponents/EnterpriseLayout';
import { EnterpriseHome, EnterpriseUsers, EnterpriseProducts, EnterpriseOrders, EnterpriseReports, EnterpriseSettings, } from '../pages/EnterpriseSubComponents/EnterprisePages';

function More() {
    const styles = {
        mainContainer: {
            padding: '24px',
            border: '1px solid #e2e8f0',
            borderRadius: '12px',
            margin: '20px',
            backgroundColor: '#f8fafc',
            fontFamily: 'sans-serif',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
        },
        card: {
            backgroundColor: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '16px',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease'
        },
        nav: { display: 'flex', gap: '16px', padding: '16px 24px', borderBottom: '2px solid #e2e8f0', borderRadius: '8px', margin: '20px' },
        // link: { color: '#0f172a', textDecoration: 'none', fontWeight: '600', fontSize: '1rem' }
        getLinkStyle: ({ isActive }) => ({
            color: isActive ? '#38bdf8' : '#0f172a',
            textDecoration: 'none',
            fontWeight: '600',
            borderBottom: isActive ? '2px solid #38bdf8' : '2px solid transparent',
            paddingBottom: '4px'
        })
    };

    return (
        <div style={styles.mainContainer}>
            <div style={styles.card}>

                <nav style={styles.nav}>
                    <NavLink to="/more/crmdashboard/" style={styles.getLinkStyle} end>CrmDashboard</NavLink>
                    <NavLink to="/more/blogdashboard/" style={styles.getLinkStyle}>BlogDashboard</NavLink>
                    <NavLink to="/more/usermanagement/" style={styles.getLinkStyle}>Multi-Level</NavLink>
                    <NavLink to="/more/hrportal/" style={styles.getLinkStyle}>HRPortal</NavLink>
                    <NavLink to="/more/travel/" style={styles.getLinkStyle}>TravelBooking</NavLink>
                    <NavLink to="/more/foodadmin/" style={styles.getLinkStyle}>FoodDeliveryAdmin</NavLink>
                    <NavLink to="/more/task19" style={styles.getLinkStyle}>Task 19: Index Route</NavLink>
                    <NavLink to="/more/task20" style={styles.getLinkStyle}>Task 20: Enterprise Admin</NavLink>
                </nav>
                <Routes>
                    <Route path="crmdashboard/*" element={<CrmDashboardLayout />}>
                        <Route index element={<Customers />} />
                        <Route path="customers" element={<Customers />} />
                        <Route path="leads" element={<Leads />} />
                        <Route path="sales" element={<Sales />} />
                        <Route path="crmreports" element={<CrmReports />} />
                        <Route path="crmsettings" element={<CrmSettings />} />
                    </Route>
                    <Route path="blogdashboard/*" element={<BlogDashboardLayout />}>
                        <Route index element={<Blog />} />
                        <Route path="dashboard" element={<Blog />} />
                        <Route path="posts" element={<AllPosts />} />
                        <Route path="add-post" element={<AddPost />} />
                        <Route path="categories" element={<Categories />} />
                        <Route path="comments" element={<Comments />} />
                        <Route path="users" element={<UserManagement />} />
                    </Route>
                    <Route path="usermanagement/*" element={<DashboardLayout />}>
                        <Route index element={<Navigate to="users" replace />} />

                        <Route path="users" element={<UsersPage />}>
                            <Route index element={<Navigate to="usr-101/profile" replace />} />

                            <Route path=":userId">
                                <Route index element={<UserProfile />} />
                                <Route path="profile" element={<UserProfile />} />
                                <Route path="settings" element={<UserSettings />} />
                                <Route path="activity" element={<UserActivity />} />
                            </Route>
                        </Route>
                    </Route>
                    <Route path="hrportal/*" element={<HrLayout />}>
                        <Route index element={<HrDashboard />} />
                        <Route path="dashboard" element={<HrDashboard />} />
                        <Route path="records" element={<EmployeeRecords />} />
                        <Route path="leave" element={<LeaveManagement />} />
                        <Route path="payroll" element={<Payroll />} />
                        <Route path="performance" element={<PerformanceReviews />} />
                    </Route>
                    <Route path="travel/*" element={<TravelLayout />}>
                        <Route index element={<TravelDashboard />} />
                        <Route path="dashboard" element={<TravelDashboard />} />
                        <Route path="flights" element={<Flights />} />
                        <Route path="hotels" element={<Hotels />} />
                        <Route path="bookings" element={<Bookings />} />
                        <Route path="payments" element={<Payments />} />
                        <Route path="support" element={<CustomerSupport />} />
                    </Route>
                    <Route path="foodadmin/*" element={<FoodAdminLayout />}>
                        <Route index element={<FoodOrders />} />
                        <Route path="orders" element={<FoodOrders />} />
                        <Route path="restaurants" element={<FoodRestaurants />} />
                        <Route path="partners" element={<FoodDeliveryPartners />} />
                        <Route path="customers" element={<FoodCustomers />} />
                        <Route path="reports" element={<FoodReports />} />
                    </Route>
                    <Route path="task19/*" element={<Task19Layout />}>
                        <Route index element={<Task19Home />} />
                        <Route path="users" element={<Task19Users />} />
                        <Route path="products" element={<Task19Products />} />
                        <Route path="settings" element={<Task19Settings />} />
                    </Route>
                    <Route path="task20/*" element={<EnterpriseLayout />}>
                        <Route index element={<EnterpriseHome />} />
                        <Route path="users" element={<EnterpriseUsers />} />
                        <Route path="products" element={<EnterpriseProducts />} />
                        <Route path="orders" element={<EnterpriseOrders />} />
                        <Route path="reports" element={<EnterpriseReports />} />
                        <Route path="settings" element={<EnterpriseSettings />} />
                    </Route>
                </Routes>
            </div>
        </div>
    );
}

export default More;