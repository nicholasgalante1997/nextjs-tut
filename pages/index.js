import Head from 'next/head';
import { header } from "../styles/styles";

const HomePage = () => {
    return ( 
    <>
    {/* adding html meta data to the page */}
        <Head>
            <title>Working with Next.js</title>
            <meta name="description" content="A site using nextjs." />
        </Head>
        <h2 style={header}>Working with Next.js</h2>
    </> );
}

export default HomePage;