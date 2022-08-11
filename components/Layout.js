import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ title, keywords, description, children }) => {
  return (
    <div className="flex flex-col max-w-8xl mx-auto ">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
       
      </Head>
      <Header/>
      {children}
      <Footer/>
    </div>
  );
};
Layout.defaultProps = {
  title: "shop Market | Find your product",
  description: "Find your product",
  keywords: "product1,product2",
  // TODO to custom later
};

export default Layout;
