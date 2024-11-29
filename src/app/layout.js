// app/layout.js
import { Montserrat } from 'next/font/google';
import './globals.css';
import MainLayout from './MainLayout';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] });




export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainLayout fontClass={montserrat.className}>
          {children}
        </MainLayout>
      </body>
    </html>
  );
}
