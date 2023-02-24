import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '@/components/header'
import CartProvider from '@/context/cart'
import UserProvider from '@/context/user'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
     <UserProvider>
      <CartProvider>
      <Header />
      <Component {...pageProps} />
      </CartProvider>
     </UserProvider>
    </>
  )
}
