import { useRouter } from 'next/router'
import { useState } from 'react';
import { button, form, header } from '../../styles/styles';

const RoutingExamplePage = () => {
    const router = useRouter();
    const [text, setText] = useState('');
    const handleChange = (event) => setText(event.target.value);
    const handleSubmit = (event) => { event.preventDefault(); router.push(`/routing/${text}`) };
    return (
        <>
            <h2 style={header}>Routing in Next.js</h2>
            <form onSubmit={handleSubmit} style={form}>
                <label>Dynamic Routing</label>
                <input type="text" value={text} onChange={handleChange} name="urlAppendageExample" />
                <button type="submit" style={button}>Go</button>
            </form>
        </>
    )
}

export default RoutingExamplePage;