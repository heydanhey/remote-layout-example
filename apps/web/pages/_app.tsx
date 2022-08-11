import Head from 'next/head'
import "../lib/tokens.css"

export default function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <Head>
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
