import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="flex items-center justify-between">
        <nav className="flex gap-8 items-center text-gray-500 font-semibold">
          <a className="text-primary font-semibold text-2xl" href="/">
            {" "}
            thachthaiminh
          </a>
          <Link href={"/"}>Home</Link>
          <Link href={""}>Menu</Link>
          <Link href={""}>Thông tin</Link>
          <Link href={""}>Liên hệ</Link>
        </nav>
        <nav className="flex items-center gap-4 text-gray-500 font-semibold">
          <Link href={"/login"}>Đăng nhập</Link>
          <Link
            href={"/register"}
            className="bg-primary rounded-full text-white px-4 py-2"
          >
            Đăng ký
          </Link>
        </nav>
      </header>
    </>
  );
}
