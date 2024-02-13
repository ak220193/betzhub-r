import gamingHead from "../../assets/capture.png";
import logo from "../../assets/betzhublogomain1.png";

const MiniFooter = () => {
  return (
    <div className="lg:grid lg:grid-cols-3 md:grid md:grid-cols-4 md:gap-8 my-5 flex flex-col justify-center items-center">
      <div className="flex justify-center items-center">
        <img src={gamingHead} alt="Head" className="h-30" />
      </div>
      <div className="flex justify-center items-center w-full  md:flex justify-center items-center m-5 sm:w-auto sm:py-0">
        <img src={logo} alt="img" />
      </div>
    
    </div>
  );
};

export default MiniFooter;