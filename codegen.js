module.exports = {
  schema: [
    {
      'http://34.87.133.81:3000/graphql': {},
    },
  ],
  overwrite: true,
  generates: {
    './generated/graphql.tsx': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
      config: {
        skipTypename: false,
        withHooks: true,
        withHOC: false,
        withComponent: false,
      },
    },
    './generated/graphql.schema.json': {
      plugins: ['introspection'],
    },
  },
}
