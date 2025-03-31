"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useQuery } from "@tanstack/react-query";
import { fetchTestModels } from "@/lib/api";
import { useTestModelList } from "@/api/generated";

export default function Home() {
  return <main className="p-4"></main>;
}
