// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import data from '../../data/blogs.json'
export default function handler(req, res) {
    // let slug = req.body.slug
    let slug = "nextjs-tutorial"
    let myblogs = data.blogs.filter((blog) => {
        return blog.slug == slug
    })
    res.status(200).json({ myblogs });
}
