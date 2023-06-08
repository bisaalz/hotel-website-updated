import { AnimatePresence } from "framer-motion";
import "../styles/globals.scss";
import { ThemeProvider } from "next-themes";
function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence>
      <ThemeProvider enableSystem={false} attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </AnimatePresence>
  );
}

export default MyApp;
