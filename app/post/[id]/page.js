'use client';
import Post from '@/app/components/Post'
import { useState, useEffect } from 'react';

async function fetchData(id) {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + id);
        if (!res.ok) {
            throw new Error('Network response was not ok');
        }
        const result = await res.json();
        return result;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}

const PagePost = ({ params: { id } }) => {
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadPost() {
            const data = await fetchData(id);
            setPost(data);
            setLoading(false);
        }
        loadPost();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!post) {
        return <div>Error loading post</div>;
    }

    return (
        <div className='post'>
            <Post post={post} />
        </div>
    )
}

export default PagePost;
