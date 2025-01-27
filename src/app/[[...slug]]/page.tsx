import { StoryblokStory } from "@storyblok/react/rsc";

import { storyblokService } from "@/services/storyblokService";

type Props = {
  params: Promise<{
    slug: string[];
  }>;
};

// Force the page to be static, but without prerendering at build time,
// using SSR only for the first request and SSG for the following requests.
export async function generateStaticParams() {
  return [];
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  console.log("Rerendering page for slug", slug);
  const story = await storyblokService.fetchStory(slug?.join("/") || "/");
  if (!story) {
    return <h1>Story not found</h1>;
  }

  return (
    <main>
      <StoryblokStory story={story} />
    </main>
  );
}
