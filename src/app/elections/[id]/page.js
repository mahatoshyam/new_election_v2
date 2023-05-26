"use client";
// import { useRouter } from "next/router";
import Link from "next/link";
// import Header from "../../../components/header";
import { useRouter } from "next/navigation";
const Post = (props) => {
  // console.log("req", req, "res", res, "etd", ...etc);
  //   const router = useRouter();

  const router = useRouter();
  //   const { id } = router.query;
  console.log("routtt", router);
  return (
    <>
      {/* <Header /> */}
      <h1>dynaimc page</h1>
      {/* <p>GO to Home page</p> */}
      <Link href="/">GO to Home page </Link>
      {/* <h1>Post: {id}</h1> */}
      <ul>
        {/* <li>
          <Link href="/post/[id]/[comment]" as={`/post/${id}/first-comment`}>
            <a>First comment</a>
          </Link>
        </li> */}
        <li>
          {/* <Link href="/post/[id]/[comment]" as={`/post/${id}/second-comment`}>
            <a>Second comment</a>
          </Link> */}
        </li>
      </ul>
    </>
  );
};

export default Post;
