import fetch from "isomorphic-fetch";
import Layout from '../components/Layout';
import Users from "../components/Users";
import Head from "next/head";

const Index = ({ users }) => {
    return (
        <>
            <Head>
                <title>Next.js Project - Home</title>
            </Head>
            <Layout>
                <h1>Next</h1>
                <Users users={users}/>
            </Layout>
        </>
    );
};

Index.getInitialProps = async (ctx) => {
    const res = await fetch("https://reqres.in/api/users");
    const resJSON = await res.json();
    return { users: resJSON.data };
};

export default Index;