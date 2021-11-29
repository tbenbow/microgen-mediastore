import { Section } from "./section";
import { Content } from "./content";


export const CardGrid = ({ data, children }) => {

  const gridCols = {
    "1": "grid-cols-1",
    "2": "grid-cols-2",
    "3": "grid-cols-3",
    "4": "grid-cols-4",
    "5": "grid-cols-5",
    "6": "grid-cols-5",
  }
  return (
    <Section
      color={data.style?.backgroundColor}
      image={data.style?.backgroundImage?.src}
      navigationLabel={data.navigationLabel}
    >
      <div className="max-w-screen-lg md:p-12 p-6 mx-auto">
        <Content
          label = {data.label}
          headline = {data.headline}
          subhead = {data.subhead}
          body = {data.body}
          buttons = {data.buttons}
          textColor = {data.style?.textColor}
          headlineColor = {data.style?.headlineColor}
          subheadColor = {data.style?.subheadColor}
          textSize = {data.style?.textSize}
          headlineSize = {data.style?.headlineSize}
          subheadSize = {data.style?.subheadSize}
          alignment = {data.style?.textAlignment}
          order = {data.style?.contentOrder}
        />
        <div className={`md:grid gap-10 md:pt-10 pt-5 ${gridCols[data.style?.columns]}`}>
          {children}
        </div>
      </div>
    </Section>
  );
};
