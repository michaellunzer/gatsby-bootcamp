import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'



const AboutPage = () => {
    return (

        <Layout>
            <Head title="About"/>
            <h1>About Me</h1>
            <p>I'm a 29 year old living in SF
                <ul>
                    <li>Graduated from University of Oregon in 2013</li>
                    <li>Worked at Oracle as a Customer Success Manager</li>
                    <li>Avid Snowboarder</li>
                </ul>
                <p>Contact me <Link to="/contact">here</Link></p>
            </p>
        </Layout>
    )
}

export default AboutPage