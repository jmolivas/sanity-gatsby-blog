export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5d00b1f389e1dd0146e1941f',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-2k3o5gzu',
                  apiId: 'ca7e3f70-959c-47a3-b91a-a0ab6d0071c4'
                },
                {
                  buildHookId: '5d00b1f47f17cd49878725a7',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-uofnsy46',
                  apiId: '3395dfcd-5a4f-4479-aa93-57a3f9374082'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jmolivas/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-uofnsy46.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
