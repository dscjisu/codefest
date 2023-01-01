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
                    <script defer async src="https://apply.devfolio.co/v2/sdk.js"></script>
                </body>
            </Html>
        );
    }
}

export default MyDocument;