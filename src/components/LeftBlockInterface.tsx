import { Helmet, HelmetProvider } from "react-helmet-async";

interface Props {
  heading: string;
  subheading?: string;
  text: string;
  other?: string;
  path?: string;
}

function LeftBlockInterface({ heading, subheading, text, other, path }: Props) {
  return (
    <div className="left-block w-1/2 flex flex-col justify-center">
      <HelmetProvider>
        <Helmet>
          <link rel="canonical" href={"https://sovljanski.com" + path} />
          <title>{heading}</title>
        </Helmet>
      </HelmetProvider>
      {subheading && (
        <p
          className="text-lg"
          dangerouslySetInnerHTML={{
            __html: subheading.replace(/\n/g, "<br />"),
          }}
        />
      )}
      <h1 className="text-xl">{heading}</h1>
      <div>
        {text && (
          <p
            className="text-med"
            dangerouslySetInnerHTML={{
              __html: text.replace(/\n/g, "<br />"),
            }}
          />
        )}
        {other}
      </div>
    </div>
  );
}

export default LeftBlockInterface;
