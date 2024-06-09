import Link from "next/link";

import { ModeToggle } from "@/app/components/ModeToggle";

export default function Navbar() {
  return (
    <nav className="relative mx-auto flex w-full max-w-5xl items-center justify-between px-4 py-5">
      <Link href="/" className="text-3xl font-bold">
        Ashe <span className="text-primary">Blog</span>
      </Link>

      <ModeToggle />
    </nav>
  );
}
