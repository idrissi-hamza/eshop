import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
// import Link from "next/link";
import Layout from "../../components/Layout";
import data from "../../utils/data";
import Link from "next/link";
import Image from "next/image";

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

  // if (!plant) {
  //   return <div> no result for the entred url</div>;
  // }
  return (
    plant && (
      <Layout title={plant.name}>
        <Link href="/">
          <a>Back to plants</a>
        </Link>
        <main className="grid grid-cols-2 ">
          <div className="ml-auto pr-4">
            <div className="  relative">
              <Image
                src={img}
                alt="Picture of the plant"
                width={510}
                height={614}
                // layout="fill"
                objectFit="cover"
              />
            </div>
            <div className=" flex items-center justify-between pt-4">
              {plant.image.slice(1, 5).map((img) => (
                <div onClick={() => setImg(img)}>
                  <Image
                    src={img}
                    alt="Picture of the plant"
                    width={110}
                    height={110}
                    // layout="fill"
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
           px-6 
           max-w-xl
            text-[#3a3b4a]  "
          >
            <h1 className="text-4xl leading-10 ">{plant.name}</h1>
            <h2 className="text-3xl leading-5 mt-10">{plant.price}</h2>
            <p className="mt-10">{plant.description}</p>
          </div>
          <div className="bg-green-300">specification</div>
          <div className="bg-yellow-200">description</div>
        </main>
      </Layout>
    )
  );
};

export default Plant;
