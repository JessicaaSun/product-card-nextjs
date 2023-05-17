import Card from "@/components/Card";
import Image from "next/image";
import Link from "next/link";

async function fetchProducts() {
  const products = await fetch(`https://dummyjson.com/products`);
  return products.json();
}

export default async function Home() {
  const products = await fetchProducts();
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-20 text-3xl">
      <div className="pt-[60px] px-10 flex flex-wrap justify-between">
        {products.products.map((product) => (
          <>
          <Link href={`/products/${product.id}`}>
          <div>
          <Card
              title={product.title}
              image={product.images[0]}
              price={product.price}
            />
          </div>
          </Link>
            
          </>
        ))}
      </div>
    </main>
  );
}
