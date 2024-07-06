import Link from "next/link";

export default function Minutes() {
  return (
    <div>
      <Link href="/minutes/add-minute" passHref>
        <div className="bg-[#8d029b] text-zinc-100 p-3 rounded-xl cursor-pointer text-center">
          Create Minute
        </div>
      </Link>
      <p>Minutes will be shown here</p>
    </div>
  );
}