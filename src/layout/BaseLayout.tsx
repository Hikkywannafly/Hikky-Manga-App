import React from 'react';
import dynamic from 'next/dynamic';
import { SeachModal } from '~/components/shared';
interface BaseLayoutProps {
    showHeader?: boolean;
    showFooter?: boolean;
    children: React.ReactNode;

}
const Header = dynamic(() => import('~/components/partials/Header'));
const Footer = dynamic(() => import('~/components/partials/Footer'));

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