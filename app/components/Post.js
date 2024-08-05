import Link from 'next/link'

const Post = ({ post }) => {
    return (
        <div>
            <Link href="/">Назад</Link><br />
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    );
};

export default Post;

            
