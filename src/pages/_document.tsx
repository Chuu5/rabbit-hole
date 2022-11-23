import { Head, Html, Main, NextScript } from "next/document";

function Document() {
    return (
        <Html>
            <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Display:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;600;700&display=swap" rel="stylesheet" />
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
        </Html>
    )
}

export default Document