import '../styles/globals.css'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {

//...
  return (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=342227824`}
      />
      <Script id="my-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8P3NH9Z5VP', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />

   <Component {...pageProps} />
   </>
  );
}

export default MyApp
