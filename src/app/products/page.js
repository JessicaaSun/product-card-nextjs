import Card from "@/components/Card";
import Image from "next/image";
import Link from "next/link";

async function fetchProducts() {
  const products = await fetch(`https://dummyjson.com/products`);
  return products.json();
}

export default async function Products() {
  const products = await fetchProducts();
  return (
    <div className="pt-10 flex flex-wrap justify-between">
      <section>
        {products.products.map((product) => (
      
            <Link href="#" key={product.id}>
              <a>
                <div>

              
                <Card
                  title={product.title}
                  image={product.images[0]}
                  price={product.price}
                />
                </div>
              </a>
              
            </Link>
     
        ))}
      </section>
    </div>
  );
}
