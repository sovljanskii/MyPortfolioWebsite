interface Props {
  heading: string;
  subheading?: string;
  text: string;
}

function LeftBlockInterface({ heading, subheading, text }: Props) {
  return (
    <div className="left-block w-1/2 flex flex-col justify-center">
      <div className="flex flex-col gap-8 pb-12">
        {subheading && (
          <p
            className="text-lg"
            dangerouslySetInnerHTML={{
              __html: subheading.replace(/\n/g, "<br />"),
            }}
          />
        )}
        <h1 className="text-xl">{heading}</h1>
      </div>
      <div>
        <p className="text-med">{text}</p>
      </div>
    </div>
  );
}

export default LeftBlockInterface;
