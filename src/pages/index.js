import "@/styles/globals.css";

// app/page.js
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// HINT: Use the `usePathname` hook to get the current pathname.
// HINT: Use the `clsx` utility to conditionally apply the 'dark-mode' class.
// HINT: There should also be two new pages we are redirecting to. Think about how we make more pages within Next.js.

function Home() {
  // Your code here
  const pathname = usePathname();

  const isDarkMode = pathname === '/dark-mode';

  return (
    <div className={clsx("container", {'dark-mode':isDarkMode})}>
      <h1>This is the Home Page!</h1>
      <div>
          <Link href='/dark-mode'>
            <button>Dark-Mode</button>
          </Link>
          <Link href='/light-mode'>
            <button>Light-Mode</button>
          </Link>
      </div>
    </div>
    
  )
}

export default Home;