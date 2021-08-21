import axios from 'axios';

const Article = ({ article }) => {
    return (
        <article>
            <h2>{article.title}</h2>
            <hr />
            <small>{article.author}</small>
            <br/>
            <p>{article.content}</p>
        </article>
    )
}

export async function getStaticPaths(){
    const url = `https://611edb8e9771bf001785c642.mockapi.io/api/v1/articles`;
    const articlesPromiseObject = await axios.get(url);
    if ( articlesPromiseObject.status === 404 || articlesPromiseObject.status === 500 ) {
        return {
            // we set fallback to true to indicate we're only pre-rendering some paths (common ones)
            fallback: true,
            paths: [{ params: { articleId: 1 }}]
        }
    }
    const paths = articlesPromiseObject.data.map(article => ({ params: { articleId: article.id }}));
    return {
        // we set fallback to false to indicate that we've pre-rendered all possible paths
        fallback: false,
        paths
    }
}

export async function getStaticProps(context) {
    const { articleId } = context.params;
    const url = `https://611edb8e9771bf001785c642.mockapi.io/api/v1/articles/${articleId}`;
    const articlesPromiseObject = await axios.get(url);
    if ( articlesPromiseObject.status === 404 || articlesPromiseObject.status === 500 ) {
        return {
            props: {
                error: 'Request to retrieve articles failed. Check logs.'
            },
            revalidate: 10
        };
    }
    return {
        props: {
            article: articlesPromiseObject.data
        },
        revalidate: 10
    };
}

export default Article;
