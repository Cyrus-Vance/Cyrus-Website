const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
                 '@primary-color': '#7c32ad',
                 '@layout-header-background': '#1d1d1d',
                 '@layout-trigger-background': '#323232',
                 '@menu-dark-inline-submenu-bg': '#323232'
                },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};