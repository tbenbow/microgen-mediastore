import React from "react";
import Markdown from "react-markdown";
import { Buttons } from "./buttons";

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

const contentAlignment = (alignment) => {
  const textAlignments = {
    left: "",
    center: "text-center",
    right: "text-right",
  };

  return textAlignments[alignment];
};

const buttonAlignment = (alignment) => {
  const textAlignments = {
    left: "",
    center: "mx-auto",
    right: "ml-auto",
  };

  return textAlignments[alignment];
};

const labelOrder = (order) => {
  const labelOrder = {
    labelHeadingsContent: "order-1",
    labelContentHeadings: "order-1",
    headingsLabelContent: "order-2",
    headingsContentLabel: "order-3",
    contentLabelHeadings: "order-2",
    contentHeadingsLabel: "order-3",
  };
  return `${labelOrder[order]}`;
}

const headingOrder = (order) => {
  const headingOrder = {
    labelHeadingsContent: "order-2",
    labelContentHeadings: "order-3",
    headingsLabelContent: "order-1",
    headingsContentLabel: "order-1",
    contentLabelHeadings: "order-3",
    contentHeadingsLabel: "order-2",
  };
  return `${headingOrder[order]}`;
}

const subheadOrder = (order) => {
  const subheadOrder = {
    labelHeadingsContent: "order-2",
    labelContentHeadings: "order-3",
    headingsLabelContent: "order-1",
    headingsContentLabel: "order-1",
    contentLabelHeadings: "order-3",
    contentHeadingsLabel: "order-2",
  };
  return `${subheadOrder[order]}`;
}

const bodyOrder = (order) => {
  const bodyOrder = {
    labelHeadingsContent: "order-3",
    labelContentHeadings: "order-2",
    headingsLabelContent: "order-3",
    headingsContentLabel: "order-2",
    contentLabelHeadings: "order-1",
    contentHeadingsLabel: "order-1",
  };
  return `${bodyOrder[order]}`;
}

export const Content = ({
  label,
  headline,
  subhead,
  body,
  buttons,
  textColor,
  headlineColor,
  subheadColor,
  textSize,
  headlineSize,
  subheadSize,
  alignment = "left",
  order = "labelHeadingsContent",
}) => {
  return (
    <div className={`flex flex-col ${contentAlignment(alignment)}`}>
      {label && <h4 className={`${labelOrder(order)} ${textColors[textColor]} ${textSizes[textSize]}`}>{label}</h4>}
      {headline && <h2 className={`${headingOrder(order)} ${textColors[headlineColor]} ${textSizes[headlineSize]}`}>{headline}</h2>}
      {subhead && <h3 className={`${subheadOrder(order)} ${textColors[subheadColor]} ${textSizes[subheadSize]}`}>{subhead}</h3>}
      {body && (
        <div className={`markdown leading-10 mt-8 items-center ${bodyOrder(order)} ${textColors[textColor]} ${textSizes[textSize]}`}>
          <Markdown>{body}</Markdown>
        </div>
      )}
      {buttons && (
        <Buttons
          buttons={buttons}
          className={`${buttonAlignment(alignment)} mt-8 order-4`}
        />
      )}
    </div>
  );
};
