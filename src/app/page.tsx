import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { simpleBlogCard } from "@/app/lib/interface";
import { client, urlFor } from "@/app/lib/sanity";

export const revalidate = 30;

async function getData() {
  const query = `
  *[_type == "blog"] | order(_createAt desc) {
  title,
    smallDescription,
    "currentSlug": slug.current,
    titleImage
  }`;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const data = await client.fetch(query);

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return data;
}

export default async function Home() {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const data: simpleBlogCard[] = await getData();

  return (
    <div className="grid grid-cols-1 gap-5 pb-14 pt-10 md:grid-cols-2">
      {data.map((post, index) => (
        <Card key={index} className="row-span-4 grid grid-rows-subgrid gap-y-0 dark:border-white/80">
          <Image
            src={urlFor(post.titleImage).url()}
            alt="image"
            width={500}
            height={500}
            className="h-[200px] w-full rounded-t-lg object-cover"
          />
          <CardContent className="row-span-4 grid grid-rows-subgrid pt-5">
            <h3 className="line-clamp-2 text-lg font-bold">{post.title}</h3>
            <p className="mt-2 line-clamp-3 text-sm text-gray-600 dark:text-gray-300">{post.smallDescription}</p>
            <Button asChild className="mx-auto mt-7 w-4/5">
              <Link href={`/blog/${post.currentSlug}`}>Read More</Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
