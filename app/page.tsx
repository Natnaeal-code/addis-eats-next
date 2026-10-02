import Link from "next/link";

export default function HomePage(){
  return(
    <div>

      <h2>Welcome to Addis Eats</h2>
      <p>Discover delicious Ethiopian dishes.</p>
    

              <Link href="/menu">Menu</Link>
    
              <Link href="/cart">Cart</Link>
    
             <Link href="/checkout">Checkout</Link>

    </div>

  );
}