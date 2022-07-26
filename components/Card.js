import Image from "next/image";

const Card = () => {
  return (
    <div>
      {/* <div className="container page-wrapper">
        <div className="page-inner"> */}
          {/* <div className="row"> */}
            <div className="el-wrapper">
              <div className="box-up">
                <div className="img">
                  <Image
                    src="/pl.webp"
                    alt="Picture of the author"
                    width={300}
                    height={260}
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
          {/* </div> */}
        {/* </div>
      </div> */}
    </div>
  );
};

export default Card;
