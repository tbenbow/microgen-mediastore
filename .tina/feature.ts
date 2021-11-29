import type { TinaTemplate } from "@tinacms/cli";
import { buttonsSchema } from "./shared/buttons";
import { navigationLabelSchema } from "./shared/navigation-label";
import { colorOptions, contentOrderOptions, hAlignOptions, vAlignOptions, textSizeOptions } from "./shared/options"

export const featureBlockSchema: TinaTemplate = {
  name: "feature",
  label: "Feature",
  ui: {
    defaultItem: {
      label: "",
      headline: "This is the main headline",
      subhead: "Here is a subhead",
      body: "Phasellus scelerisque, libero eu finibus rutrum, risus risus accumsan libero, nec molestie urna dui a leo.",
      style: {
        flipLayout: false,
        imageStyle: "natural",
        headlineColor: "black",
        headlineSize: "3xl",
        subheadColor: "black",
        subheadSize: "3xl",
        textColor: "black",
        textSize: "base",
        backgroundColor: "white",
        textAlignment: "left",
        contentAlignment: "center",
        contentOrder: "labelHeadingsContent",
      },
    },
  },
  fields: [
    {
      label: "Image",
      name: "image",
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
    navigationLabelSchema,
    {
      type: "object",
      label: "Section Style",
      name: "style",
      ui: {
        component: "group",
      },
      fields: [
        {
          label: "Flip Layout",
          name: "flipLayout",
          type: "boolean",
        },
        {
          label: "Layout Style",
          name: "imageStyle",
          type: "string",
          ui: {
            component: "select",
          },
          options: [
            { label: "Natural Size", value: "natural" },
            { label: "Fit in Half", value: "fitHalf" },
            { label: "Fill Half", value: "fillHalf" },
            { label: "Fill Overlap", value: "overlap" },
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
          label: "Vertical Alignment",
          name: "contentAlignment",
          type: "string",
          ui: {
            component: "select",
          },
          options: vAlignOptions,
        },
        {
          label: "Content Order",
          name: "contentOrder",
          type: "string",
          ui: {
            component: "select",
          },
          options: contentOrderOptions
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
    },
  ],
};
