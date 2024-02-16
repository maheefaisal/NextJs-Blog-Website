import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import blogs from '../data/blogs.json'
import { useEffect } from "react";
import Link from "next/link";



export default function Home({ blogs }) {

  return (
    <>
      <div className="container">
        <h1 className="my-4 text-center">Welcome To Mara Blogs</h1>
        <div className="cards row justify-content-center">
          {blogs.blogs.map((blog) => {
            return <div class="card mx-4 my-4" style={{ "width": "18rem" }}>
              <img src="https://revenuearchitects.com/wp-content/uploads/2017/02/Blog_pic-1030x584.png" class="card-img-top" alt="blogimage1" />

              <div class="card-body">
                <h5 class="card-title">{blog.title}</h5>
                <p class="card-text">{blog.content.substring(0, 111)}</p>
                <Link href={"blogpost/" + blog.slug} class="btn btn-primary">Read More</Link>
              </div>
            </div>
          })}
        </div>
      </div>
    </>
  );
}
export async function getServerSideProps(context) {
  return {
    props: { blogs }, // will be passed to the page component as props
  }
}