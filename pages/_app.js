import "@/styles/globals.css";
import Head from 'next/head'
import Script from 'next/script'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function App({ Component, pageProps }) {
  return <>
    <Head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="myProjects/webProject/icofont/css/icofont.min.css" />

      <title>Mara Blogs</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-+nBsK5eMK7xejpBkHxBz4O8Oj/U4W15qEmjDe/+nKRPI7tA3C7TlgxsixWXY+Nnx2W9VYNRki10TkOMgaGU3iA==" crossorigin="anonymous" referrerpolicy="no-referrer" />

    </Head>
    <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></Script>
    <Script src="https://use.fontawesome.com/a4e2acc8ae.js"></Script>
    <Script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></Script>
    <Script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></Script>

    <Navbar />
    <Component {...pageProps} />
    <Footer />

  </>
}
export default App