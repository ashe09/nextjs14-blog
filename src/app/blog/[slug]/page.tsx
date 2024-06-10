import { PortableText } from "@portabletext/react";
import Image from "next/image";

import { fullBlog } from "@/app/lib/interface";
import { client, urlFor } from "@/app/lib/sanity";

async function getData(slug: string) {
  const query = `
  *[_type == "blog" && slug.current == '${slug}'] {
    "currentSlug": slug.current,
    title,
    content,
    titleImage
  }[0]`;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const data = await client.fetch(query);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return data;
}

export default async function BlogArticle({ params }: { params: { slug: string } }) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const data: fullBlog = await getData(params.slug);
  return (
    <div className="pb-14 pt-10">
      <h1>
        <span className="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight sm:text-4xl">
          {data.title}
        </span>
      </h1>

      <Image
        src={urlFor(data.titleImage).url()}
        width={600}
        height={600}
        alt="Title Image"
        priority
        className="mx-auto mt-8 rounded-lg border"
      />

      <div className="prose prose-lg prose-blue mx-auto mt-16 break-words dark:prose-invert prose-a:text-primary prose-li:marker:text-primary">
        {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          <PortableText value={data.content} />
        }
      </div>
    </div>
  );
}
