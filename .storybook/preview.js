export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'crest',
    values: [
      {
        name: 'crest',
        value: '#292727',
      },
    ],
  },

}