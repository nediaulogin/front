import Head from 'next/head';
import Footer from './Footer';
import Navibar from './Navbar';


interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps): JSX.Element {
    return (
        <>
            <Head>
                <title>Next.js + Tailwind CSS</title>
                <meta name="description" content="Next.js + Tailwind CSS" />
            </Head>
            <Navibar />
            <main className="min-h-70vh">{children}</main>
            <Footer />
        </>
    );
}