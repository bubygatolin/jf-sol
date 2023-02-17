import { AppProps } from 'next/app';
import { Header } from '../components/Header';
import {PayPalScriptProvider} from '@paypal/react-paypal-js';

import '../styles/global.scss';

import { Provider as NextAuthProvider } from 'next-auth/client';

const initialOptions = {
  "client-id": "AW4FyMyfGAhaGrkqlYdbHc5MkkDg4l50kKHPrB4Jti1LuA7ycJCdVQtKyuSu5eqqW6rEXuKsgAO8RXV5",
  currency: "BRL",
  intent: "capture",
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextAuthProvider session={pageProps.session} >
      <PayPalScriptProvider options={initialOptions}>
        <Header/>
        <Component {...pageProps} />
      </PayPalScriptProvider>
    </NextAuthProvider>
  )
}

export default MyApp
