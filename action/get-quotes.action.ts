"use server";
import { quotes } from "@/data";

export default async function getQuotes(): Promise<string[]> {
  return quotes;
}
