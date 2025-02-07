import { TrolleyIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const productSchema = defineType({
  name: "product",
  title: "Product",
  type: "document",
  icon: TrolleyIcon,
  fields: [
    defineField({
      name: "productName",
      title: "Product Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "productName",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Product Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "discount",
      title: "Discount",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "stock_quantity",
      title: "Stock Quantity",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "colors",
      title: "Colors",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "sizes",
      title: "Sizes",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "rating",
      title: "Rating",
      type: "number",
      validation: (Rule) => Rule.min(0).max(5),
    }),
    defineField({
      name: "label",
      title: "Label",
      type: "string",
      validation: (Rule) => Rule.min(0),
    }),
    defineField({
      name: "status",
      title: "Product Status",
      type: "string",
      options: {
        list: [
          { title: "In Stock", value: "in_stock" },
          { title: "Out of Stock", value: "out_of_stock" },
          { title: "Discontinued", value: "discontinued" },
          { title: "New", value: "new" },
          { title: "Hot", value: "hot" },
          { title: "Sale", value: "sale" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "productName",
      media: "image",
      subtitle: "price",
    },
    prepare(selection) {
      return {
        title: selection.title,
        subtitle: `$${selection.subtitle}`,
        media: selection.media,
      };
    },
  },
});
