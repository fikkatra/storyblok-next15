import { StoryblokStory } from "@storyblok/react/rsc";

import { storyblokService } from "@/services/storyblokService";

type RouteParams = {
  slug: string[];
};

type Props = {
  params: Promise<RouteParams>;
};

export async function generateStaticParams() {
  // This page should use static routing, so it's important to add this function.
  // However, we do not want to pre-generate all possible routes (using "build-once deploy many",
  // we don't want to add DEV-content to a build that will be used in production), so we return an empty array.
  return [];
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
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
