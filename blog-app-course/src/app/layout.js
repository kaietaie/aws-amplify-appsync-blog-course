import './globals.css'
import '../../configureAmplify'
import { Open_Sans } from 'next/font/google'
import NavBar from './components/nabar'

const openSans = Open_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'My first AWS app',
  description: 'AWS Amplify AppSync Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <main>
        <NavBar />
        <div className="mx-auto max-w-7xl px-2 mt-16 sm:px-6 lg:px-8">
        {children}
        </div>
        </main>
        </body>
    </html>
  )
}

