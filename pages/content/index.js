import { useRouter } from 'next/router';
import axios from 'axios';
import { button, header } from '../../styles/styles';

const ContentExamplePage = (props) => {
    const router = useRouter();
    const onDetailsClick = (id) => router.push(`/content/${id}`);
    // now inside of our props object we have access to the static props we have fetched on pre-render
    const { articles } = props;
    return (
        <>
            <h2 style={header}>Rendering Content in Next.js</h2>
            <hr/>
            <div style={{overflow: 'auto'}}>
              {articles.map(article => (
                <div key={article.id}>
                    <h2>{article.title}</h2>
                    <small>{article.author}</small>
                    <button style={button} onClick={() => onDetailsClick(article.id)}>Read</button>
                </div>
            ))}  
            </div>
        </>
    )
}

/* 
this is a pre-built OOB nextjs function 
when you export this function from a PAGE LEVEL REACT COMPONENT
nextjs will call this function before rendering your component, and 
prepare props to deliver to your component,
this code is basically server side code
this is because it will be called during this BUILD phase
and prepare props for your website, it will never run on user machines, its SSR
*/
export async function getStaticProps () {
    // fetch async data here from whatever backend or api;
    // mock api endpoint full of faker.js articles
    const url = `https://611edb8e9771bf001785c642.mockapi.io/api/v1/articles`
    const articlesPromiseObject = await axios.get(url);

    // the only possibe status codes we can receive from mock api are
    // 200, 201, 404, 500 - if it is 404 or 500, we've hit a failure case
    if ( articlesPromiseObject.status === 404 || articlesPromiseObject.status === 500 ) {
        return {
            props: {
                error: 'Request to retrieve articles failed. Check logs.'
            },
            revalidate: 10
        };
    }

    return {
        // this `props` object returned right here, is the props object
        // that the ContentExamplePage recieves
        props: {
            articles: articlesPromiseObject.data
        },
        // with this value set,
        // we instruct Next to re-pregenerate this page on the server, after deployment
        revalidate: 10
    };
};

// this is another OOB next js function
// what this one does is, it basically tells the server,
// hey whenever there is a req for this page,
// run this function before serving the page and parse in the props
// we receive an argument called context for this func
// export function getServerSideProps (context) {
//     // ideal for fetching API data that is constantly changing
//     // ideal for authentication checks pre page load
//     // super similar to Express js req res middleware
//     const {req, res} = context;
//     return {
//         props: {
//             data: ['I fire every time the server delivers this page;']
//         }
//     };
// }

export default ContentExamplePage;