import type { TinaTemplate } from "@tinacms/cli";
import { buttonsSchema } from "./shared/buttons";
import { cardsSchema } from "./shared/cards";
import { navigationLabelSchema } from "./shared/navigation-label";
import { colorOptions, textSizeOptions } from "./shared/options"

const defaultCard = {
  headline: "Here's Another Card",
  subhead: "",
  text: "This is where you might talk about the card, if this wasn't just filler text.",
};

export const textCardsBlockSchema: TinaTemplate = {
  name: "textCards",
  label: "Text Cards",
  ui: {
    defaultItem: {
      label: "",
      headline: "This is a headline",
      subhead: "Here is a subhead",
      body: "Phasellus scelerisque, libero eu finibus rutrum, risus risus accumsan libero, nec molestie urna dui a leo.",
      style: {
        columns: "3",
        backgroundColor: "white",
        textAlignment: "left",
        contentOrder: "labelHeadingsContent",
        headlineColor: "black",
        headlineSize: "3xl",
        subheadColor: "black",
        subheadSize: "3xl",
        textColor: "black",
        textSize: "base",
      },
      cardStyle: {
        type: "solid",
        buttonType: "solid",
        accentColor: "primary",
        backgroundColor: "gray",
        headlineColor: "black",
        headlineSize: "2xl",
        subheadColor: "black",
        subheadSize: "lg",
        textColor: "black",
        textSize: "base",
      },
      items: [defaultCard, defaultCard, defaultCard],
    },
  },
  fields: [
    {
      label: "Label",
      name: "label",
      type: "string",
    },
    {
      label: "Headline",
      name: "headline",
      type: "string",
    },
    {
      label: "Subhead",
      name: "subhead",
      type: "string",
    },
    {
      label: "Body",
      name: "body",
      type: "string",
      ui: {
        component: "markdown",
      },
    },
    buttonsSchema,
    {
      type: "object",
      label: "Cards",
      name: "items",
      list: true,
      ui: {
        defaultItem: {
          ...defaultCard,
        },
      },
      fields: [
        {
          type: "string",
          label: "Title",
          name: "headline",
        },
        {
          label: "Subhead",
          name: "subhead",
          type: "string",
        },
        {
          type: "string",
          label: "Text",
          name: "text",
          ui: {
            component: "markdown",
          },
        },
        {
          type: "string",
          label: "Link",
          name: "link",
        },
        {
          type: "string",
          label: "Button Label",
          name: "buttonLabel",
          description: "A button will be included if you have a link and button label, with only a link the entire card is linked"
        },
        {
          label: "Accent Color",
          name: "accentColor",
          type: "string",
          ui: {
            component: "select",
          },
          options: colorOptions,
        },
      ],
    },
    navigationLabelSchema,
    cardsSchema,
    {
      type: "object",
      label: "Card Style",
      name: "cardStyle",
      ui: {
        component: "group",
      },
      fields: [
        {
          label: "Type",
          name: "type",
          type: "string",
          ui: {
            component: "select",
          },
          options: [
            { label: "Solid", value: "solid" },
            { label: "Transparent Background", value: "transparent" },
          ],
        },
        {
          label: "Background Color",
          name: "backgroundColor",
          type: "string",
          ui: {
            component: "select",
          },
          options: colorOptions,
        },
        {
          label: "Accent Color",
          name: "accentColor",
          type: "string",
          ui: {
            component: "select",
          },
          options: colorOptions,
        },
        {
          label: "Button Type",
          name: "buttonType",
          type: "string",
          ui: {
            component: "select",
          },
          options: [
            { label: "Solid", value: "solid" },
            { label: "Outline", value: "outline" },
            { label: "Link", value: "link" },
          ],
        },
        {
          label: "Button Text Color",
          name: "buttonTextColor",
          type: "string",
          ui: {
            component: "select",
          },
          options: colorOptions,
        },
        {
          label: "Headline Color",
          name: "headlineColor",
          ui: {
            component: "select",
          },
          type: "string",
          options: colorOptions,
        },
        {
          label: "Headline Size",
          name: "headlineSize",
          type: "string",
          ui: {
            component: "select",
          },
          options: textSizeOptions,
        },
        {
          label: "Subhead Color",
          name: "subheadColor",
          type: "string",
          ui: {
            component: "select",
          },
          options: colorOptions,
        },
        {
          label: "Subhead Size",
          name: "subheadSize",
          type: "string",
          ui: {
            component: "select",
          },
          options: textSizeOptions,
        },
        {
          label: "Text Color",
          name: "textColor",
          ui: {
            component: "select",
          },
          type: "string",
          options: colorOptions,
        },
        {
          label: "Text Size",
          name: "textSize",
          type: "string",
          ui: {
            component: "select",
          },
          options: textSizeOptions,
        },
      ],
    },
  ],
};
