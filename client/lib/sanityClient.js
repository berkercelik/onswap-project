import sanityClient from '@sanity/client'

// this is your sanity project area
//sanity.io is basically a database and connecting with API for your project.
export const client = sanityClient({
    projectId:'your-project-id',
    dataset: 'production',
    apiVersion: 'v1',
    token:
    'your-token',
    useCdn:'false',
})