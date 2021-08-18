import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>
        <Link href="/user-123/social">
          <a>/user-123/social</a>
        </Link>{" "}
        doesn&apos;t work when it should.
      </div>
      <div>
        <Link href="/user-123/social/social-123">
          <a>/user-123/social/social-123</a>
        </Link>{" "}
        works as expected.
      </div>
    </>
  )
}
