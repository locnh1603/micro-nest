import PageFooter from "../components/footer";
import Navbar from "../components/navbar";
import SideMenu from "../components/sidebar";

export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <>
        <Navbar />
        <SideMenu />
        <main>{children}</main>
        <PageFooter />
        </>
    )
}