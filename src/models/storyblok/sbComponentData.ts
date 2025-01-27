import { SbBlokData } from "@storyblok/react/rsc";

export type SbComponentData<T> = {
  blok: SbBlokData & T;
};
