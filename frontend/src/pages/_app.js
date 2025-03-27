import Navigation from '../components/Navigation';
import MobileHeader from '../components/MobileHeader';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex min-h-screen bg-black text-white">
      <Navigation />
      <MobileHeader />
      <main className="flex-1 md:ml-72 max-w-2xl mx-auto md:border-l border-gray-800 min-h-screen pt-16 pb-16 md:py-0">
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp; 