import Card from "../components/Card";
import Layout from "../components/Layout";
import data from "../utils/data";

export default function Home() {
  return (
    <Layout>
      <div className="min-h-[70vh] mx-auto">
        <h1>Products</h1>
        <div
          className="gap-10 g-red-300 
        
        my-10 
        grid 
        md:grid-cols-2  lg:grid-cols-3
         2xl:grid-cols-4 3xl:flex flex-wrap justify-center min-h-full space"
        >
          {data.products.map((plant, i) => (
            <Card key={i} plant={plant} />
          ))}
        </div>
        {/* <ul>
        <li>Product 1</li>
        <li>Product 2</li>
        <li>Product 3</li>
        <Card/>
      </ul> */}
      </div>
    </Layout>
  );
}
