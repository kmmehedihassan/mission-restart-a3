import { createContext, useContext, useEffect, useState } from "react";

const InstallContext = createContext();

export const InstallProvider = ({ children }) => {

    // Initial state directly from localStorage
    const [installedApps, setInstalledApps] = useState(() => {
        const data = localStorage.getItem("installedApps");
        return data ? JSON.parse(data) : [];
    });

    useEffect(() => {
        localStorage.setItem("installedApps", JSON.stringify(installedApps));
    }, [installedApps]);

    // Install
    const installApp = (app) => {
        setInstalledApps((prev) => {
            const exists = prev.find((item) => item.id === app.id);
            if (exists) return prev;
            return [...prev, app];
        });
    };

    // Uninstall
    const uninstallApp = (id) => {
        setInstalledApps((prev) =>
            prev.filter((app) => app.id !== id)
        );
    };

    return (
        <InstallContext.Provider
            value={{ installedApps, installApp, uninstallApp }}
        >
            {children}
        </InstallContext.Provider>
    );
};

export const useInstall = () => useContext(InstallContext);