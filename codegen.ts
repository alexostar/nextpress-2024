import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'https://wpheadless.casabrava.se/graphql',
  generates: {
    'lib/generated/': {
      preset: 'client',
      plugins: [],
    },
  },
};

export default config;
