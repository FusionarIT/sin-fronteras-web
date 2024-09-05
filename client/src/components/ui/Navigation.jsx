/*
    Navegación pensada para mobile.
    Es la barra de abajo que me lleva a -> Home, alumnos, ajustes, salir
*/

import {
    FaCog,
    FaGraduationCap,
    FaSignOutAlt,
    FaTasks,
    FaUser,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Navigation = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    // Para manejar el logout
    const { logout } = useAuth();

    const handleLogout = async () => {
        logout();
    };

    return (
        <div className="w-full h-28 bg-blue-950 flex justify-around items-center text-white text-sm md:px-36">
            <Link
                to="/"
                className={`flex flex-col items-center ${
                    currentPath === "/" ? "text-blue-300" : ""
                }`}
            >
                <div
                    className={`h-12 w-12 sm:h-14 sm:w-14 rounded-full flex items-center justify-center ${
                        currentPath === "/"
                            ? "bg-blue-400 text-white"
                            : "bg-white text-blue-950"
                    }`}
                >
                    <FaUser />
                </div>
                <span className="mt-2">Home</span>
            </Link>

            <Link
                to="/alumnos"
                className={`flex flex-col items-center ${
                    currentPath === "/alumnos" ? "text-blue-300" : ""
                }`}
            >
                <div
                    className={`h-12 w-12 sm:h-14 sm:w-14 rounded-full flex items-center justify-center ${
                        currentPath === "/alumnos"
                            ? "bg-blue-400 text-white"
                            : "bg-white text-blue-950"
                    }`}
                >
                    <FaGraduationCap />
                </div>
                <span className="mt-2">Alumnos</span>
            </Link>

            <Link
                to="/ajustes"
                className={`flex flex-col items-center ${
                    currentPath === "/ajustes" ? "text-blue-300" : ""
                }`}
            >
                <div
                    className={`h-12 w-12 sm:h-14 sm:w-14 rounded-full flex items-center justify-center ${
                        currentPath === "/ajustes"
                            ? "bg-blue-400 text-white"
                            : "bg-white text-blue-950"
                    }`}
                >
                    <FaCog />
                </div>
                <span className="mt-2">Ajustes</span>
            </Link>

            <Link
                onClick={handleLogout}
                className={`flex flex-col items-center ${
                    currentPath === "/logout" ? "text-blue-300" : ""
                }`}
            >
                <div
                    className={`h-12 w-12 sm:h-14 sm:w-14 rounded-full flex items-center justify-center ${
                        currentPath === "/logout"
                            ? "bg-blue-400 text-white"
                            : "bg-white text-blue-950"
                    }`}
                >
                    <FaSignOutAlt />
                </div>
                <span className="mt-2">Salir</span>
            </Link>
        </div>
    );
};

export default Navigation;
