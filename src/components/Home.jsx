function Home() {
    return (
      <div className="bg-home">
        <h1 className="text-top">we're here</h1>
        <h1 className="text-right">to bake</h1>
        <h1 className="text-left">you</h1>
        <h1 className="text-bottom">happy.</h1>

        <div style={{overflow: "hidden"}}>
        <div className="bg-shape"></div>
        <img className="macaronHome" src="./macaronHomePage.png" alt="macaron" />
        </div>
      </div>
    );
  }
  
  export default Home;
  