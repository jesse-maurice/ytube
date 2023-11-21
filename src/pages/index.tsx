import { Lexend } from 'next/font/google';

import Main from '../components/Main';
import Navbar from '../components/Navbar';

// const inter = Inter({ subsets: ['latin'] })

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
  display: "block",
  
})

export default function Home() {
  return (
    <main
      className={`w-full pt-[21px] h-screen ${lexend.variable} bg-[#111010]`}
    >
      <Navbar />
      <Main/>
    </main>
  );
}
