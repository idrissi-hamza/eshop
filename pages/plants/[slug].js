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

  const increase = () => {
    (prev) => setQuantity(prev + 1);
  };
  const decrease = () => {
    (prev) => setQuantity(prev - 1);
  };
  return (
    plant && (
      <Layout title={plant.name}>
        <div className="mx-auto">
          <Link href="/">
            <a>Back to plants</a>
          </Link>
          <main className=" grid grid-cols-2 max-w-5xl">
            <div className=" pr-6">
              <Image
                src={img}
                alt="Picture of the plant"
                width={510}
                height={614}
                // layout="fill"
                objectFit="cover"
              />

              <div className=" flex items-center justify-between pt-4">
                {plant.image.slice(1, 5).map((img, i) => (
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
           lg:px-18 
           sm:px-10  
            
           max-w-xl
            text-[#3a3b4a]  "
            >
              <h1 className="text-4xl leading-10 ">{plant.name}</h1>
              <h2 className="text-3xl leading-5 mt-10">{plant.price}</h2>
              <p className="my-10">{plant.description}</p>
              <Specification plant={plant} n={5} />
              <div className="mt-14 flex space-x-8">
                <span>Quantity</span>
                <button
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
                <button onClick={() => setQuantity(+quantity + 1)}>+</button>
              </div>
              <button className="bg-[#b2bc83] uppercase text-slate-100 tracking-wider font-bold min-w-full  py-5 mt-14">
                Add to Card
              </button>
            </div>
            <div className="bg-green-300">specification</div>
            <div className="bg-yellow-200">description</div>
          </main>
        </div>
      </Layout>
    )
  );
};

export default Plant;
