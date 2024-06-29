import { Helmet, HelmetProvider } from "react-helmet-async";

export default function ProjectsPage() {
  return (
    <div className="h-full flex flex-column ">
      <HelmetProvider>
        <Helmet>
          <link rel="canonical" href={"https://sovljanski.com/projects"} />
          <title>Projects | Dimitrije Šovljanski</title>
        </Helmet>
      </HelmetProvider>
      <h1 className="text-h1">Projects</h1>
    </div>
  );
}
