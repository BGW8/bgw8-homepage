import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html>
				<Head>
					<link rel='preconnect' href='https://fonts.googleapis.com'></link>
					<link
						rel='preconnect'
						href='https://fonts.gstatic.com'
						crossOrigin
					></link>
					<link
						href='https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&family=Roboto+Condensed:wght@400;700&display=swap'
						rel='stylesheet'
					></link>
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
