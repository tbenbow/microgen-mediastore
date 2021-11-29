
import type { TinaField } from "@tinacms/cli";

export const navigationLabelSchema: TinaField = {
  label: "Navigation Label",
  name: "navigationLabel",
  description: "Add an item with this label to the navigation. When clicked we jump to this section.",
  type: "string"
};
