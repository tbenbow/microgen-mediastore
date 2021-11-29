import Markdown from "react-markdown";
import { Buttons } from "../buttons";
import { CardGrid } from "../card-grid";

const TextCard = ({ data, cardstyle }) => {
  const wrapClasses = () => {
    return data.link && data.buttonLabel ? 'pb-24' : ''
  };
  const textColors = {
    white: "text-white",
    grayLight: "text-gray-200",
    gray: "text-gray-500",
    grayDark: "text-gray-800",
    black: "text-black",
    primary: "text-primary",
    accent1: "text-accent1",
    accent2: "text-accent2",
    accent3: "text-accent3",
  };
  const textSizes = {
    xs: "text-xs",
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
    "4xl": "text-4xl",
    "5xl": "text-5xl",
    "6xl": "text-6xl",
    "7xl": "text-7xl",
    "8xl": "text-8xl",
  };
  const backgroundColors = {
    white: "bg-white",
    grayLight: "bg-gray-200",
    gray: "bg-gray-500",
    grayDark: "bg-gray-800",
    black: "bg-black",
    primary: "bg-primary",
    accent1: "bg-accent1",
    accent2: "bg-accent2",
    accent3: "bg-accent3",
  };
  const backgroundClasses = {
    solid: `${backgroundColors[cardstyle?.backgroundColor]}`,
    transparent: `${backgroundColors[cardstyle?.backgroundColor]} opacity-70`,
  }
  const headlineColor = () => {
    const color = data.accentColor ? data.accentColor : cardstyle?.headlineColor
    return `text-2xl font-semibold m-0 ${textColors[color]}`
  };

  return (
    <div className={`relative text-left p-8 mb-6 md:mb-0 border-box ${wrapClasses()}`}>
      <div className={`${backgroundClasses[cardstyle?.type]} absolute inset-0 -z-1`}></div>
      {data.headline && (
        <h3 className={`${headlineColor()} ${textSizes[cardstyle?.headlineSize]} font-semibold m-0`}>
          {data.headline}
        </h3>
      )}
      {data.subhead && (
        <h4 className={`${textColors[cardstyle?.subheadColor]} ${textSizes[cardstyle?.subheadSize]}`}>
          {data.subhead}
        </h4>
      )}
      {data.text && (
        <div className={`markdown ${textColors[cardstyle?.textColor]} ${textSizes[cardstyle?.textSize]} mt-4 first:mt-0`}>
          <Markdown>{data.text}</Markdown>
        </div>
      )}
      {data.link && data.buttonLabel && (
        <Buttons buttons={[{
          link: data.link,
          label: data.buttonLabel,
          textColor: cardstyle?.buttonType === 'link' ? cardstyle?.accentColor : cardstyle?.buttonTextColor,
          backgroundColor: data.accentColor ? data.accentColor : cardstyle?.accentColor,
          type: 'solid'
        }]} className="absolute bottom-8" />
      )}
      {data.link && !data.buttonLabel && (
        <a href={data.link} className="absolute inset-0 z-20" />
      )}
    </div>
  );
};

export const TextCards = ({ data }) => {
  return (
    <CardGrid data={data} children={(
      data.items &&
        data.items.map(function (block, i) {
          return <TextCard key={i} data={block} cardstyle={data.cardStyle} />;
        })
    )}/>
  );
};
