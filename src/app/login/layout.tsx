"use client";

import { Stack } from "@chakra-ui/react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <Stack>{children}</Stack>;
}
