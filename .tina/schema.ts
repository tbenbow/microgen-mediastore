import { defineSchema } from "@tinacms/cli";
import { featureBlockSchema } from "./feature";
import { photoCardsBlockSchema } from "./photo-cards";
import { textCardsBlockSchema } from "./text-cards";
import { bannerBlockSchema } from "./banner";
import { colorOptions } from "./shared/options"

export default defineSchema({
  collections: [
    {
      label: "Global",
      name: "global",
      path: "content/global",
      fields: [
        {
          type: "string",
          label: "Google Tag Manager ID",
          name: "gtmId",
        },
        {
          type: "object",
          label: "Redirects",
          name: "redirects",
          list: true,
          fields: [
            {
              type: "string",
              label: "From",
              name: "from",
            },
            {
              type: "string",
              label: "To",
              name: "to",
            },
          ]
        },
      ],
    },
    {
      label: "Pages",
      name: "pages",
      path: "content/pages",
      fields: [
        {
          type: "boolean",
          label: "Draft",
          description: "Draft posts are only visible on staging.",
          name: "draft",
        },
        {
          type: "object",
          list: true,
          name: "blocks",
          label: "Sections",
          templates: [
            featureBlockSchema,
            photoCardsBlockSchema,
            textCardsBlockSchema,
            bannerBlockSchema,
          ],
        },
        {
          type: "object",
          label: "Meta",
          name: "meta",
          description: "Site title, description, social sharing image",
          ui: {
            component: "group",
          },
          fields: [
            {
              type: "string",
              label: "Site Title",
              name: "siteTitle",
            },
            {
              type: "string",
              label: "Site Description",
              name: "siteDescription",
            },
            {
              type: "image",
              label: "Social Sharing Image",
              name: "siteImageSrc",
            },
          ]
        },
        {
          type: "object",
          label: "Navigation",
          name: "nav",
          ui: {
            component: "group",
          },
          fields: [
            {
              label: "Navigation",
              description: "Additional links in the header",
              name: "navItems",
              list: true,
              type: "object",
              fields: [{
                label: "Label",
                name: "label",
                type: "string"
              }, {
                label: "Link",
                name: "link",
                type: "string",
              }]
            },
            {
              label: "Navigation Text Color",
              name: "navTextColor",
              ui: {
                component: "select",
              },
              type: "string",
              options: colorOptions,
            },
            {
              label: "Navigation Background Color",
              name: "navBackgroundColor",
              type: "string",
              ui: {
                component: "select",
              },
              options: colorOptions,
            }
          ]
        },
        {
          type: "object",
          label: "Colors",
          name: "colors",
          ui: {
            component: "group",
          },
          fields: [
            {
              type: "string",
              label: "Primary",
              name: "primary",
              ui: {
                component: "color",
              },
            },
            {
              type: "string",
              label: "Accent 1",
              name: "accent1",
              ui: {
                component: "color",
              },
            },
            {
              type: "string",
              label: "Accent 2",
              name: "accent2",
              ui: {
                component: "color",
              },
            },
            {
              type: "string",
              label: "Accent 3",
              name: "accent3",
              ui: {
                component: "color",
              },
            },
          ]
        },
      ],
    },
  ],
});
