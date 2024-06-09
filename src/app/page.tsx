import { client, urlFor } from "@/app/lib/sanity";
import { simpleBlogCard } from "@/app/lib/interface";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

async function getData() {
  const query = `
  *[_type == "blog"] | order(_createAt desc) {
  title,
    smallDescription,
    "currentSlug": slug.current,
    titleImage
  }`;

  const data = await client.fetch(query);

  return data;
}

export default async function Home() {
  const data: simpleBlogCard[] = await getData();
  console.log(data);

  return (
    <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
      {data.map((post, index) => (
        <Card key={index} className="row-span-4 grid grid-rows-subgrid gap-y-0">
          <Image
            src={urlFor(post.titleImage).url()}
            alt="image"
            width={500}
            height={500}
            className="h-[200px] w-full rounded-t-lg object-cover"
          />
          <CardContent className="row-span-4 mt-5 grid grid-rows-subgrid">
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
