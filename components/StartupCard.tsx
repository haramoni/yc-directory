import { PostsProps } from "@/app/(root)/page";
import { formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";

export default function StartupCard({ post }: { post: PostsProps }) {
  console.log(post);

  return (
    <li className="  bg-white border-[5px] border-black py-6 px-5 rounded-[22px] shadow-200 hover:border-primary transition-all duration-500 hover:shadow-300 hover:bg-primary-100">
      <div className="flex-between">
        <p className="font-medium text-[16px] bg-primary-100 px-4 py-2 rounded-full group-hover:bg-white-100">
          {formatDate(post._createdAt.toString())}
        </p>
      </div>
      <div className="flex gap-1.5">
        <EyeIcon className="size-6 text-primary" />
        <span className="text-16-medium">{post.views}</span>
      </div>

      <div className="flex-between mt-5 gap-5">
        <div className="flex-1">
          <Link href={`/user/${post.author?._id}`}>
            <p className="text-16-medium line-clamp-1">{post.author?.name}</p>
          </Link>
          <Link href={`/startup/${post._id}`}>
            <h3 className="text-26-semibold line-clamp-1"></h3>
          </Link>
        </div>

        <Link href={`/user/${post.author._id}`}>
          <Image
            src="https://placehold.co/48x48"
            alt="placeholder"
            width={48}
            height={48}
            className="rounded-full"
          />
        </Link>
      </div>

      <Link href={`/startup/${post._id}`}>
        <p className="font-normal text-[16px] line-clamp-2 my-3 text-black-100 break-all">
          {post.description}
        </p>
        <img
          src={post.image}
          alt="Image"
          className="w-full h-[164px] rounded-[10px] object-cover"
        />
      </Link>

      <div className="flex-between gap-3 mt-5">
        <Link href={`/?query${post.category.toLowerCase()}`}>
          <p className="text-16-medium"> {post.category}</p>
        </Link>
        <Button
          className="rounded-full bg-black-200 font-medium text-[16px] text-white px-5 py-3 !important"
          asChild
        >
          <Link href={`/startup/${post._id}`}>Details</Link>
        </Button>
      </div>
    </li>
  );
}
