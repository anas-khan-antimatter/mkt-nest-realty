import { LISTINGS_DATA, formatPrice } from "@/lib/data";
import ListingsClient from "./client";

export default function ListingsPage({
  searchParams,
}: {
  searchParams: Promise<{ minPrice?: string; maxPrice?: string; beds?: string; baths?: string; sort?: string; q?: string }>;
}) {
  return (
    <ListingsClient
      searchParams={searchParams}
      allListings={LISTINGS_DATA}
    />
  );
}