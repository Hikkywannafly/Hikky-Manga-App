import React from 'react'
import { Header, Footer } from '~/components/partials';
import { SeachModal } from '~/components/shared';
interface BaseLayoutProps {
    showHeader?: boolean;
    showFooter?: boolean;
    children: React.ReactNode;

}

export default function BaseLayout({
    children,
    showFooter = true,
    showHeader = true
}: BaseLayoutProps) {
    return (
        <React.Fragment>
            {showHeader && <Header />}
            <SeachModal />
            <main className='text-white'>
                {children}
            </main>
            {showFooter && <Footer />}
        </React.Fragment>
    );
}