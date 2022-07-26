
import Card from "../components/Card";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="min-h-[70vh]">

      <h1>Products</h1>
      <ul>
        <li>Product 1</li>
        <li>Product 2</li>
        <li>Product 3</li>
        <Card/>
      </ul>
      </div>
    </Layout>
  );
}
