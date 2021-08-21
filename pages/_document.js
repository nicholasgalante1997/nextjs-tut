// Head gives us access to the <head> html element for our page;
import Document, { Html, Head, Main, NextScript } from 'next/document'

// adding Document level customizations to your app
// in this case, a global google font
class MyDocument extends Document {
  render() {
    return (
      <Html>
         <Head>
            { /* Links requisite for font */ }
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link href="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Spartan:wght@300&display=swap" rel="stylesheet"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument;