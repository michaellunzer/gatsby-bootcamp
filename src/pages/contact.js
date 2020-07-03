import React from 'react'
// import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

const ContactPage = () => {
    return (
        <Layout>
        <Head title="Contact"/>
            <h1>Contact Me</h1>
            <p>Hit me up here:
                <ul>
                    <li>email: ... </li>
                    <li>cell phone: ... </li>
                    <li>twitter: <a href="https://twitter.com/michaellunzer" target="_blank" rel="noreferrer">@michaellunzer</a></li>
                </ul>
            </p>
        </Layout>
    )
}

export default ContactPage