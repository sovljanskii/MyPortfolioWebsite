import ChangingText from "../components/Main/ChangingText";

function HomePage() {
  return (
    <>
      <div className="w-1/2 py-20">
        <div className="py-10">
          <h2 className="text-h2">Hi, my name is</h2>
          <h1 className="text-h1">Dimitrije Šovljanski</h1>
        </div>
        <div>
          <p className="text-p">
            I'm a <ChangingText />
          </p>
        </div>
      </div>
    </>
  );
}

export default HomePage;
