export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e88bf3c44de2a3306e8355c',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-demo-studio-pxo1phdd',
                  apiId: '3385e76f-1cae-470d-a3e2-9080d991ebf8'
                },
                {
                  buildHookId: '5e88bf3dbb65cd5cd1eb44dc',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-demo-web-57am6ngu',
                  apiId: '39b13c2c-bdec-4771-a901-cef56be58812'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/e-schultz/sanity-gatsby-blog-demo',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-demo-web-57am6ngu.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
