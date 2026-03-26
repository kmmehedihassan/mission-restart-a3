import { Outlet, useNavigation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

export default function MainLayout() {
    const navigation = useNavigation();
    const isPageLoading = navigation.state === "loading";

    return (
        <div className="flex flex-col min-h-screen">
            <Header />

            {/* Full-screen loading overlay during route transitions */}
            {isPageLoading && (
                <div
                    role="status"
                    aria-label="Navigating to new page"
                    className="fixed inset-0 bg-white/70 backdrop-blur-sm flex items-center justify-center z-50"
                >
                    <Loader />
                </div>
            )}

            <main className="flex-1">
                <Outlet />
            </main>

            <Footer />
        </div>
    );
}
