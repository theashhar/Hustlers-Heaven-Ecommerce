import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '@/components/header'
import CartProvider from '@/context/cart'
import UserProvider from '@/context/user'
import Footer from '@/components/footer'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
     <UserProvider>
      <CartProvider>
      <Header />
      <Component {...pageProps} />
      <Footer />
      </CartProvider>
     </UserProvider>
    </>
  )
}
