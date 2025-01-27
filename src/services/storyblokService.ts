import { ISbStoriesParams, ISbStoryData } from "@storyblok/react/rsc";
import { draftMode } from "next/headers";

import { getStoryblokApi } from "@/lib/storyblok";

class StoryblokService {
  public async fetchStory(slug: string): Promise<ISbStoryData> {
    const { isEnabled: draftModeEnabled } = await draftMode();

    const params: ISbStoriesParams = {
      version: draftModeEnabled ? "draft" : "published",
    };

    const response = await getStoryblokApi()?.getStory(slug, params, {
      cache: draftModeEnabled ? "no-store" : "default",
    });
    console.log(
      "Storyblok GET story response",
      response?.data?.story?.content?.body
    );
    return response?.data?.story;
  }
}

export const storyblokService = new StoryblokService();
