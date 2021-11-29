
import type { TinaField } from "@tinacms/cli";
import { colorOptions, contentOrderOptions, hAlignOptions, textSizeOptions } from "./options"

export const cardsSchema: TinaField = {
  type: "object",
  label: "Section Style",
  name: "style",
  ui: {
    component: "group",
  },
  fields: [
    {
      label: "Columns",
      name: "columns",
      ui: {
        component: "select",
      },
      type: "string",
      options: [
        { label: "1", value: "1" },
        { label: "2", value: "2" },
        { label: "3", value: "3" },
        { label: "4", value: "4" },
      ],
    },
    {
      label: "Text Alignment",
      name: "textAlignment",
      type: "string",
      ui: {
        component: "select",
      },
      options: hAlignOptions,
    },
    {
      label: "Content Order",
      name: "contentOrder",
      type: "string",
      ui: {
        component: "select",
      },
      options: contentOrderOptions,
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
      label: "Background Image",
      name: "backgroundImage",
      type: "object",
      fields: [
        {
          label: "Image Source",
          name: "src",
          type: "image",
        },
        {
          name: "alt",
          label: "Alt Text",
          type: "string",
        },
      ],
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
};