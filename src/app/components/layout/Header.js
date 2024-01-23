import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="flex items-center justify-between">
        <a className="text-primary font-semibold text-2xl" href="">
          {" "}
          thachthaiminh
        </a>
        <nav className="flex gap-8 items-center text-gray-500 font-semibold">
          <Link href={""}>Home</Link>
          <Link href={""}>Menu</Link>
          <Link href={""}>Thông tin</Link>
          <Link href={""}>Liên hệ</Link>
          <Link
            href={""}
            className="bg-primary rounded-full text-white px-4 py-2"
          >
            Login
          </Link>
        </nav>
      </header>
    </>
  );
}
