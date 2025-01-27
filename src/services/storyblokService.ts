import { ISbStoriesParams, ISbStoryData } from "@storyblok/react/rsc";
import { draftMode } from "next/headers";

import { getStoryblokApi } from "@/lib/storyblok";

class StoryblokService {
  public async fetchStory(slug: string): Promise<ISbStoryData> {
    const { isEnabled: draftModeEnabled } = await draftMode();
    const useDraftContent =
      process.env.NODE_ENV === "development" || draftModeEnabled;

    const params: ISbStoriesParams = {
      version: useDraftContent ? "draft" : "published",
    };

    const response = await getStoryblokApi()?.getStory(slug, params, {
      cache: useDraftContent ? "no-store" : "default",
    });
    return response?.data?.story;
  }
}

export const storyblokService = new StoryblokService();
