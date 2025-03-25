import "./loading.css";

const LoadScreen = () => {
  return (
    <>
      <div className="stage">
        <div className="container">
          <div className="image box">
            <img id="logo" src="/public/Logo.svg" alt="Logo" />
          </div>
          <div className="load box">
            <div className="cir cir-1"></div>
            <div className="cir cir-2"></div>
            <div className="cir cir-3"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoadScreen;
