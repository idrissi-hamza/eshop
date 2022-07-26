import Image from "next/image";

const Card = () => {
  return (
    <div className="el-wrapper  
    w-[320px]  
  
    p-2  bg-white">
      <div className="box-up">
        <div className="img">
          <Image
            src="/pl.webp"
            alt="Picture of the author"
            width={320}
            height={260}
            // layout="fixed"
          />
        </div>
        <div className="img-info">
          <div className="info-inner">
            <span className="p-name font-bold">Product name</span>
            {/* <span className="p-company">Yeezy</span> */}
          </div>
          <div className="a-more">
            More info :{" "}
            <span className="more">more info about the product</span>
          </div>
        </div>
      </div>

      <div className="box-down">
        <div className="h-bg">
          <div className="h-bg-inner"></div>
        </div>

        <a className="cart" href="#">
          <span className="price">$120</span>
          <span className="add-to-cart">
            <span className="txt">Add in cart</span>
          </span>
        </a>
      </div>
    </div>
  );
};

export default Card;
