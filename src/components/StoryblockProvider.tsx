"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Page from "../components/Page";

//import Testimonial from "./Testimonial";

storyblokInit({
  accessToken: "i20Q9ZZcD1z1cvrWLgX1zgtt",
  use: [apiPlugin],
  apiOptions: {
    region: "eu",
  },
  components: {
    page: Page,
  },
});

export default function StoryblokProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
