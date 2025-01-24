"use client";

import { Button, Modal, Table } from "flowbite-react";
import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { HiOutlineExclamationCircle } from "react-icons/hi";

export default function DashPosts() {
  const { user } = useUser();
  console.log("user", user);

  const [userPosts, setUserPosts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [postIdToDelete, setPostIdToDelete] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("/api/post/get", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: user?.publicMetadata?.userMongoId,
          }),
        });
        const data = await res.json();
        console.log(data);

        if (res.ok) {
          setUserPosts(data.posts);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    if (user?.publicMetadata?.isAdmin) {
      fetchPosts();
    }
    
  }, [user?.publicMetadata?.isAdmin, user?.publicMetadata?.userMongoId]);

  const handleDeletePost = async () => {
    setShowModal(false);
    try {
      const res = await fetch("/api/post/delete", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          postId: postIdToDelete,
          userId: user?.publicMetadata?.userMongoId,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        const newPosts = userPosts.filter(
          (post) => post._id !== postIdToDelete
        );
        setUserPosts(newPosts);
        setPostIdToDelete(""); // Reset postIdToDelete after deletion
      } else {
        console.log(data.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  if (!user?.publicMetadata?.isAdmin) {
    return (
      <div className="flex flex-col items-center justify-center h-full w-full py-7">
        <h1 className="text-2xl font-semibold">You are not an admin!</h1>
      </div>
    );
  }

  return (
    

    <div className="grid grid-cols-1 w-full sm:grid-cols-2 lg:grid-cols-4 gap-1 p-8">
  {user?.publicMetadata?.isAdmin && userPosts.length > 0 ? (
    userPosts.map((post) => (
      <div
        key={post._id}
        className="border w-[80%] h-[22rem] rounded-lg shadow-md p-4 bg-white dark:bg-gray-800"
      >
        <Link href={`/post/${post.slug}`}>
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-40 object-cover rounded-lg mb-4 bg-gray-500"
          />
        </Link>
        <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
          {post.title}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          {post.category}
        </p>
        <p className="text-xs text-gray-400 dark:text-gray-500 mb-4">
          Last updated: {new Date(post.updatedAt).toLocaleDateString()}
        </p>
        <div className="flex justify-between">
          <span
            className="font-medium text-red-500 hover:underline cursor-pointer"
            onClick={() => {
              setShowModal(true);
              setPostIdToDelete(post._id);
            }}
          >
            Delete
          </span>
          <Link
            className="text-teal-500 hover:underline"
            href={`/dashboard/update-post/${post._id}`}
          >
            Edit
          </Link>
        </div>
      </div>
    ))
  ) : (
    <p className="col-span-full text-center text-gray-600 dark:text-gray-400">
      You have no posts yet!
    </p>
  )}

  <Modal
    show={showModal}
    onClose={() => setShowModal(false)}
    popup
    size="md"
  >
    <Modal.Header />
    <Modal.Body>
      <div className="text-center">
        <HiOutlineExclamationCircle className="h-14 w-14 text-gray-400 dark:text-gray-200 mb-4 mx-auto" />
        <h3 className="mb-5 text-lg text-gray-500 dark:text-gray-400">
          Are you sure you want to delete this post?
        </h3>
        <div className="flex  justify-center gap-4">
          <Button className="text-black" onClick={handleDeletePost}>
            Yes, I&apos;m sure
          </Button>
          <Button color="gray" onClick={() => setShowModal(false)}>
            No, cancel
          </Button>
        </div>
      </div>
    </Modal.Body>
  </Modal>
</div>

  );
}
