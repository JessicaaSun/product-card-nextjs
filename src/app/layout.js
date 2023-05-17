import './globals.css'
import { Inter } from 'next/font/google'
import NavbarComponent from '@/components/Navbar'
import FooterComponent from '@/components/Footer'
import thumbnail from "../../public/images/thumbnail.jpg"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Jess ECommerce',
  description: 'Tinh ey tinh tov',
  openGraph: {
    images: thumbnail,
  }
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavbarComponent/>
        {children}
        <FooterComponent/>
        </body>
    </html>
  )
}
