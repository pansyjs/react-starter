import antfu from '@antfu/eslint-config';

export default antfu(
  {
    react: true,
    unocss: true,
    formatters: true,
    stylistic: {
      semi: true,
    },
  },
);
