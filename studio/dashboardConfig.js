export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '61ba5863ea58bd8752c7d190',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-raw74tbj',
                  apiId: 'eae9c503-1cad-46fa-a655-ef0135c35683'
                },
                {
                  buildHookId: '61ba58648bfe9f922c517625',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-iuc2o3wy',
                  apiId: 'd25148c7-4c8a-4dd5-94db-13008841bc66'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/superduperlilia/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-iuc2o3wy.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
