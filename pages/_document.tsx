import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html style={{ scrollBehavior: 'smooth' }}>
                <Head>
                    <link rel="apple-touch-icon" href="/logo192.png" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;