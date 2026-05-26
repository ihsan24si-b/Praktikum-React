import { NavLink } from "react-router-dom";
import { MdSpaceDashboard, MdListAlt, MdPeople, MdFastfood, MdError, MdLock, MdBlock } from "react-icons/md";

export default function Sidebar() {
    // Styling dasar untuk menu
    const menuClass = "flex items-center rounded-xl p-4 space-x-2 transition-all text-gray-600 hover:text-hijau hover:bg-green-200 hover:font-extrabold";
    const activeClass = "bg-green-100 text-hijau font-extrabold";

    return (
        <div id="sidebar" className="flex min-h-screen w-90 flex-col bg-white p-10 shadow-lg">
            <div id="sidebar-logo" className="flex flex-col">
                <span id="logo-title" className="font-poppins text-[48px] text-gray-900">
                    Sedap <b id="logo-dot" className="text-hijau">.</b>
                </span>
                <span id="logo-subtitle" className="font-semibold text-gray-400">Modern Admin Dashboard</span>
            </div>

            <div id="sidebar-menu" className="mt-10">
                <ul id="menu-list" className="space-y-3">
                    {/* DASHBOARD */}
                    <li>
                        <NavLink to="/" id="menu-1" className={({ isActive }) => `${menuClass} ${isActive ? activeClass : ""}`}>
                            <MdSpaceDashboard className="mr-4 text-xl" />
                            Dashboard
                        </NavLink>
                    </li>

                    {/* ORDERS */}
                    <li>
                        <NavLink to="/orders" id="menu-2" className={({ isActive }) => `${menuClass} ${isActive ? activeClass : ""}`}>
                            <MdListAlt className="mr-4 text-xl" />
                            Orders
                        </NavLink>
                    </li>

                    {/* CUSTOMERS */}
                    <li>
                        <NavLink to="/customers" id="menu-3" className={({ isActive }) => `${menuClass} ${isActive ? activeClass : ""}`}>
                            <MdPeople className="mr-4 text-xl" />
                            Customers
                        </NavLink>
                    </li>

                    {/* PRODUCTS */}
                    <li>
                        <NavLink to="/products" id="menu-4" className={({ isActive }) => `${menuClass} ${isActive ? activeClass : ""}`}>
                            <MdFastfood className="mr-4 text-xl" />
                            Products
                        </NavLink>
                    </li>

                    {/* COMPONENTS */}
                    <li>
                        <NavLink to="/components" id="menu-5" className={({ isActive }) => `${menuClass} ${isActive ? activeClass : ""}`}>
                            <MdListAlt className="mr-4 text-xl" />
                            Components
                        </NavLink>
                    </li>

                    {/* COMPONENTS */}
                    <li>
                        <NavLink to="/FiturXyz" id="menu-5" className={({ isActive }) => `${menuClass} ${isActive ? activeClass : ""}`}>
                            <MdListAlt className="mr-4 text-xl" />
                            Fitur-coba-xyz
                        </NavLink>
                    </li>

                    {/* ERROR PAGES */}
                    <li>
                        <a href="/error-400" className={menuClass}>
                            <MdError className="mr-4 text-xl text-orange-500" />
                            Error 400
                        </a>
                    </li>
                    <li>
                        <a href="/error-401" className={menuClass}>
                            <MdLock className="mr-4 text-xl text-red-400" />
                            Error 401
                        </a>
                    </li>
                    <li>
                        <a href="/error-403" className={menuClass}>
                            <MdBlock className="mr-4 text-xl text-red-600" />
                            Error 403
                        </a>
                    </li>
                </ul>
            </div>

            <div id="sidebar-footer" className="mt-auto">
                <div id="footer-card" className="bg-hijau px-4 py-2 rounded-md shadow-lg mb-10 flex items-center justify-between">
                    <div id="footer-text" className="text-white text-sm">
                        <span>Please organize your menus through button below!</span>
                        <div id="add-menu-button" className="flex justify-center items-center p-2 mt-3 bg-white rounded-md space-x-2 text-black cursor-pointer hover:bg-gray-100">
                            <span> + Add Menus</span>
                        </div>
                    </div>
                    <img id="footer-avatar" className="w-20 rounded-full ml-4" src="https://i.pravatar.cc/100" alt="Avatar" />
                </div>
                <span id="footer-brand" className="font-bold text-gray-400">Furab Restaurant Admin Dashboard</span>
                <p id="footer-copyright" className="font-light text-gray-400">&copy; 2026 All Right Reserved</p>
            </div>
        </div>
    );
}