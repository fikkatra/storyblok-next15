'use client';

import { storyblokInit } from '@storyblok/react/rsc';
import React from 'react';

// Initialize Storyblok client-side for the Storyblok Visual Editor
// Do not include access token or apiClient here, as it is not needed/wanted client-side
storyblokInit({
  enableFallbackComponent: true,
});

export default function StoryblokProvider({
  children,
}: React.PropsWithChildren) {
  return children;
}
