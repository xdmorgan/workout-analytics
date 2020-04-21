import Link from "next/link";
import { Button } from "../src/button";

export default function Index() {
  return (
    <div className="container wysiwyg child-my-0">
      <h1>Hello Next.js</h1>

      <Link href="/about">
        <a>About Page</a>
      </Link>
      <div className="mt-10x">
        <Button>Test</Button>
      </div>
    </div>
  );
}
