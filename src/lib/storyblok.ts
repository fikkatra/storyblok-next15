import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";

import Feature from "@/components/Feature";
import Page from "@/components/Page";

const components = {
  feature: Feature,
  page: Page,
};

export const getStoryblokApi = storyblokInit({
  accessToken: process.env.STORYBLOK_PREVIEW_ACCESS_TOKEN,
  use: [apiPlugin],
  components,
  apiOptions: {
    cache: { type: "memory", clear: "manual" },
  },
});
