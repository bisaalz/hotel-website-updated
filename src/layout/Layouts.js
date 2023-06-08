import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BottomNavigation from "../components/layouts/bottomNavigation";

const Layouts = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Hotel Website</title>
      </Head>

      <Header />
      <main className="container relative pt-36  space-y-24 mb-24 lg:space-y-28 lg:mb-28 mx-auto ">
        {children}
      </main>
      <Footer />
      <BottomNavigation />
    </div>
  );
};

export default Layouts;
