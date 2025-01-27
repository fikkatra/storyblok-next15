import { SbComponentData } from "@/models/storyblok/sbComponentData";
import { storyblokEditable } from "@storyblok/react/rsc";

type Props = SbComponentData<{
  name: string;
}>;

export default function Feature({ blok }: Props) {
  return <div {...storyblokEditable(blok)}>{blok.name}</div>;
}
