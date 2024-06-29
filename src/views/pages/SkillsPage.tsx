import { Helmet, HelmetProvider } from "react-helmet-async";

export default function MyCVPage() {
  return (
    <div className="container h-full flex flex-col gap-8">
      <HelmetProvider>
        <Helmet>
          <link rel="canonical" href={"https://sovljanski.com/skills"} />
          <title>Skills | Dimitrije Šovljanski</title>
        </Helmet>
      </HelmetProvider>
      <div>
        <h1 className="text-h1 text-center">Skills</h1>
      </div>
    </div>
  );
}
