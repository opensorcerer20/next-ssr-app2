import { Product } from "@/shared";
import { NextResponse } from "next/server";

const products: Product[] = [{id: 1, name: "product 1"}, {id: 2, name: "product 2"}, {id: 3, name: "product 3"}];

export async function GET() {
  return NextResponse.json(products);
}
