"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useQuery } from "@tanstack/react-query";
import { fetchTestModels } from "@/lib/api";
import { Spinner, Text, Box, Heading } from "@chakra-ui/react";
import { useTestModelList } from "@/api/generated";

export default function Home() {
  // const { data, isLoading, error } = useQuery({
  //   queryKey: ["testModel"], // for cache
  //   queryFn: fetchTestModels,
  // });
  const { data, isLoading, error } = useTestModelList();

  if (isLoading) return <Spinner size="xl" m={10} />;
  if (error)
    return <Text color="red.500">Error: {(error as Error).message}</Text>;

  return (
    <main className="p-4">
      <Box p={6}>
        <Heading mb={4}>Subjects</Heading>
        {data?.map((subject: any) => (
          <Box key={subject.id} p={4} mb={2} bg="gray.100" rounded="md">
            {subject.name}
          </Box>
        ))}
      </Box>
    </main>
  );
}
