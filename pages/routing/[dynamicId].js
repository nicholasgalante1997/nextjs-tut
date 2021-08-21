import { useRouter } from 'next/router';
import { button } from '../../styles/styles';

const RoutingDynamicallyExamplePage = () => {

    // gives us access to our routing information
    const router = useRouter();

    // identifier will be located inside the query object under the filename key
    const routeParam = router.query.dynamicId;

    return (
        <>
            <h2>Routing Dynamically in Next.js</h2>
            <p>{routeParam}</p>
            <button style={button} onClick={() => router.back()}>
                Back
            </button>
        </>
    )
}

export default RoutingDynamicallyExamplePage;