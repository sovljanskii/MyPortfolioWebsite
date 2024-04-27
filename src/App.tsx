import "./App.css";

function App() {
  return (
    <>
      <section className="hero min-h-[80vh]">
        <div className="container flex mr-12">
          <div className="left-block w-1/2">
            <div className="flex flex-col gap-8 pb-12">
              <p className="text-lg">hi, my name is</p>
              <h1 className="text-xl">Dimitrije Šovljanski</h1>
            </div>
            <div>
              <p className="text-med">
                I'm a dedicated freelance software and web developer,
                continuously striving to solve any challenges I encounter.
              </p>
            </div>
          </div>
          <div className="right-block w-1/2"></div>
        </div>
      </section>
    </>
  );
}

export default App;
