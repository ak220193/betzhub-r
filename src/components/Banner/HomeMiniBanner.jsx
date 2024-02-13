import React, { useState, useEffect } from "react";
import basketBallImg from "../../assets/basketball-wallpapers-for-phone-1@2x.png";

const HomeMiniBanner = () => {
  const bannerDatas = [
    { name: "Kabin", amount: 58888 },
    { name: "Gawri", amount: 23456 },
    { name: "Aakash", amount: 4000 },
    { name: "Giri", amount: 100200 },
    { name: "Dinesh", amount: 89900 },
    { name: "Sheeba", amount: 20000 },
    { name: "Hari", amount: 30000 },
    { name: "Lavanya", amount: 12000 },
    { name: "Gokul", amount: 25000 },
    { name: "Sooraj", amount: 34000 }

  ];

  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset(
        (prevOffset) => (prevOffset - 100) % (bannerDatas.length * 100)
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [bannerDatas.length]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 items-center mb-3 lg:mx-10">
      <div className=" w-[60%] mt-4 mb-5 ml-40">
        <img
          src={basketBallImg}
          alt="BannerImage"
        />
      </div>

      <div className="flex flex-col col-span-2 gap-7 mb-10 text-white px-16 md:px-14 md:pt-20">
        <div className="font-extrabold text-4xl ml-15 mt-5 text-center">
          Play Anytime, Anywhere!
        </div>
        <div className="flex space-x-7 text-xl overflow-x-scroll w-full gap-7">
          {bannerDatas.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-3"
              style={{ transform: `translateX(${offset}%)` }}
            >
              <h2>{item.name}</h2>
              <h2>₹{item.amount}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeMiniBanner;
