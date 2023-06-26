import NextHead from 'next/head';
import React from 'react';
interface HeadProps {
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
}
const Head = ({
    title,
    description,
    keywords,
    image = 'https://nextjs.org/static/images/twitter-cards/nextjs-twitter-card.png',
}: HeadProps) => {
    return (
        <NextHead>
            <meta charSet="UTF-8" />
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#000000" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@nextjs" />
            <meta name="twitter:creator" content="@nextjs" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:site_name" content={title} />
            <meta property="og:image" content={image} />
            <meta name="mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="application-name" content={title} />
            <meta name="apple-mobile-web-app-title" content={title} />
            <meta name="theme-color" content="#f43f5e" />
            <meta name="msapplication-navbutton-color" content="#f43f5e" />
        </NextHead>
    )
}
export default Head;