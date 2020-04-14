import Link from "next/link";

export default function Index() {
  return (
    <div>
      <p>Hello Next.js</p>

      <Link href="/about">
        <a>About Page</a>
      </Link>
    </div>
  );
}
