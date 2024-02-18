import React from 'react'
import blogs from "../../data/blogs.json"
import { useRouter } from 'next/router'
const Slug = ({ myblog }) => {
    const router = useRouter()
    const { slug } = router.query
    return (
        <>

            <div className="container">

                <h1 className="my-4">{myblog.title}</h1>
                <img src={myblog.image} alt="" />
                {myblog.author && <p>Author: {myblog.author}</p>}
                <p>{myblog.content}</p>

            </div>
        </>)
}

export default Slug
export async function getServerSideProps(context) {
    let myblog = blogs.blogs.filter((blog) => {
        return blog.slug == context.query.slug
    })
    return {
        props: { myblog: myblog[0] }, // will be passed to the page component as props
    }
}