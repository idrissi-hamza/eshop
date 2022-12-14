import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
// import Link from "next/link";
import Layout from "../../components/Layout";
import data from "../../utils/data";
import Link from "next/link";
import Image from "next/image";
import Specification from "../../components/Specification";

const Plant = () => {
  const [img, setImg] = useState("");
  const [plant, setPlant] = useState(null);

  const router = useRouter();
  useEffect(() => {
    if (router.isReady) {
      const { slug } = router.query;
      console.log(slug);
      let plant = data.plants.find((plant) => plant.slug === slug);
      // console.log(plant);
      setPlant(plant);
      setImg(plant.image[0]);
    }
  }, [router.isReady]);

  const [quantity, setQuantity] = useState(1);


  return (
    plant && (
      <Layout title={plant.name} description={plant.description}>
        <div className="mx-auto flex flex-col px-5">
          <Link href="/">
            <a className="mt-10 inline-block">Back to plants</a>
          </Link>
          <main className=" mt-14 flex flex-col gap-10 lg:gap-0 lg:flex-row max-w-5xl">
            <div className="">
              <Image
                src={img}
                alt="Picture of the plant"
                width={510}
                height={614}
                // layout="fill"
                objectFit="cover"
              />

              <div className=" flex items-center justify-between pt-4 ">
                {plant.image.slice(0, 4).map((img, i) => (
                  <div key={i} onClick={() => setImg(img)}>
                    <Image
                      src={img}
                      alt="Picture of the plant"
                      width={110}
                      height={110}
                      objectFit="cover"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div
              className=" flex flex-col items-start 
              
              bg-red-40

              lg:pl-20
            
           max-w-lg
            text-[#3a3b4a]  "
            >
              <h1 className="text-4xl leading-10 ">{plant.name}</h1>
              <h2 className="text-3xl leading-5 mt-10">{plant.price}</h2>
              <p className="my-10">{plant.description}</p>
              <div className="mx-auto">
                <Specification plant={plant} n={5} />
              </div>
              <div className="mt-14 flex space-x-8 items-center justify-center">
                <span>Quantity</span>
                <button
                  className="font-bold text-lg"
                  onClick={() => {
                    quantity > 1 && setQuantity(quantity - 1);
                  }}
                >
                  -
                </button>
                <input
                  type={"number"}
                  value={quantity}
                  className="w-10 "
                  onChange={(e) => setQuantity(e.target.value)}
                  max={99}
                  min={1}
                />
                <button
                  className="font-bold text-lg"
                  onClick={() => {
                    quantity < 99 && setQuantity(+quantity + 1);
                  }}
                >
                  +
                </button>
              </div>
              {/* <div>
                <span>Status : </span>
                <span>
                  {plant.countInStock > 0 ? "In Stock" : "Unavailable"}
                </span>
              </div> */}
              <button className="bg-[#b2bc83] uppercase text-slate-100 tracking-wider font-bold min-w-full  py-5 mt-14">
                Add to Cart
              </button>
            </div>
          </main>
          {/* //a tab to add later */}
          {/* <section className="bg-green-300">
            <div></div>
          </section> */}
        </div>
      </Layout>
    )
  );
};

export default Plant;
