'use client';

import { Inter } from "next/font/google";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider, useQueryClient } from "@tanstack/react-query";

const inter = Inter({ subsets: ["latin"] });

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <head>
        <title>Dashdine</title>
      </head>
      <body className={inter.className}>
        <QueryClientProvider client={queryClient}>
          <ChakraProvider>
            {children}
          </ChakraProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
