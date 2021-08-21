import Link from 'next/link';
import { body, container, nav, navItem } from '../../styles/styles';

const Layout = ({ children }) => {

    return (
        <div style={container}>
           <header style={nav}>
                <Link href="/" passHref key="uuuu20" className="hoverable">
                    <span className="hoverable" style={navItem}>Next.js</span>
                </Link>
                <Link href="/routing" passHref key="uuuu21" className="hoverable">
                   <span className="hoverable" style={navItem}>Routing in Next.js</span>
                </Link>
                <Link href="/content" passHref key="uuuu22" className="hoverable">
                   <span className="hoverable" style={navItem}>Rendering Content with Next.js</span>
                </Link>
                <Link href="/nextapi" passHref key="uuuu23" className="hoverable">
                   <span className="hoverable" style={navItem}>Utilizing Next.js API Functionalities</span>
                </Link>
           </header>
           <main style={body}>
            {children}
           </main>
        </div>
    )
}

export default Layout;