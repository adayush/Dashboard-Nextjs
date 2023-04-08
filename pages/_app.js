import '@/styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import { Montserrat, Lato } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable : '--font-montserrat',
})

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable : '--font-lato',
})

export default function App({ Component, pageProps, session }) {
  return <div className={`${montserrat.variable} ${lato.variable} font-sans font-normal`}>
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  </div>
}
