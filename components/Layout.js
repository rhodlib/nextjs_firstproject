import Navigation from './Natigation';
import Head from "next/head";

const Layout = ({children}) => (
    <>
        <Head>
            <title>Next.js Project</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.4.1/cyborg/bootstrap.min.css"/>
        </Head>
        <Navigation/>
        <div className="container p-4">
            {children}
        </div>
    </>
)

export default Layout;