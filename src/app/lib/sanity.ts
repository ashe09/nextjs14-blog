import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "☓☓☓☓☓☓",
  dataset: "production",
  apiVersion: "2024-05-23",
  useCdn: false
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}
