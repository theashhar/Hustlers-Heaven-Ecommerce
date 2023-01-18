import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '@/components/header'
import CartProvider from '@/context/cart'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <CartProvider>
      <Header />
      <Component {...pageProps} />
      </CartProvider>
    </>
  )
}
