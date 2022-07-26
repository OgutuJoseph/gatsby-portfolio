import {  Link, graphql } from 'gatsby';
import React from 'react';
import Layout from '../../components/Layout';
import * as styles from '../../styles/projects.module.css';

export default function Projects({ data }) {
    console.log('data: ', data);

    // const projects = data.allMarkdownRemark.nodes
    const projects = data.projects.nodes;
    const contact = data.contact.siteMetadata.contact;

    return (
        <Layout>
            <div className={styles.portfolio}>
                <h2>Portfolio</h2>
                <h3>Projects & Websites I have created.</h3>
                <div className={styles.projects}>
                    {projects.map(project => (
                        <Link to={'/projects/' + project.frontmatter.slug} key={project.id}>
                            <div>
                                <h3>{project.frontmatter.title}</h3>
                                <p>{project.frontmatter.stack}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            Email: {contact}
            </div>
        </Layout>
    )
}

// export page query
export const query = graphql`
    query ProjectsPage {
        projects: allMarkdownRemark(sort: {order: ASC, fields: frontmatter___date}) {
            nodes {
                frontmatter {
                    title
                    stack
                    slug
                }
                id
            }
        }
        contact: site {
            siteMetadata {
                contact
            }
        }
    }
`
