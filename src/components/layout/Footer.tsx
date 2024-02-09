import Link from "next/link";

export function Footer() {
  return (
    <footer className="p-4 flex justify-center">
      <small className=" text-sm font-medium leading-none">
        © {new Date().getFullYear()} by{" "}
        <Link
          href="https://www.linkedin.com/in/mouad-ananouch-51b088229/"
          target="_blank"
          className="underline underline-offset-[3px]"
        >
          Mouad Ananouch
        </Link>
      </small>
    </footer>
  );
}
