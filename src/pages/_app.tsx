import '../styles/global.scss';

import { AppProps } from 'next/app';

import { Header } from '../components/Header';

function App({ Component, pageProps }: AppProps) {
  return(
    <>
      <Header/>
      <Component {...pageProps} />
    </>
  )
}

export default App