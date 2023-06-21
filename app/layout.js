'use client'
import { Provider } from 'react-redux'
import Footer from './components/Footer'
import Header from './components/Header'
import './globals.css'
import { Oswald, Urbanist } from 'next/font/google'
import store from '@/store/store'

const oswald = Oswald({ subsets: ['latin'] })
const urbanist = Urbanist({ subsets: ['latin'] })


const metadata = {
  title: 'ManStyle Mart',
  description: 'E-Commerce-Website',
}
// layout page every page is loaded from here
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Provider store={store}>
      <body className={urbanist.className}>
      <Header/>
      <main >{children}</main>
      <Footer/>
      </body>
      </Provider>

    </html>
  )
}
