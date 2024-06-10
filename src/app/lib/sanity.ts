import imageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "☓☓☓☓☓☓",
  dataset: "production",
  apiVersion: "2024-05-23",
  useCdn: false
});

const builder = imageUrlBuilder(client);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlFor(source: any) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  return builder.image(source);
}
