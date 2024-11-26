import Link from "next/link";
import { APP_NAME, COURSE_GITHUB, DEMOS_ENABLED } from "../config";

export default function Navbar() {
  return (
    <header id="navbar">
      <h1>
        <Link href="/">{APP_NAME}</Link>
      </h1>
      <nav>
        <Link href="/design">Login</Link>
        <Link href="/">Home</Link>
        <Link href={COURSE_GITHUB} target="_blank">
          GitHub
        </Link>
        <Link href="/tic-tac-toe">Tic Tac Toe</Link>
        <Link href="/nasa">NASA</Link>
        {DEMOS_ENABLED ? <Link href="/demos">Demos</Link> : null}
      </nav>
    </header>
  );
}
