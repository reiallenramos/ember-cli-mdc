/* eslint-env node */

const { Blueprint } = require ('ember-cli-blueprint-helpers');

module.exports = Blueprint.extend ({
  packages: [
    {name: '@material/theme', target: '3.1.0'}
  ],

  addons: [
    {name: 'ember-cli-mdc-sass', blueprintOptions: {save: true}},
    {name: 'ember-cli-custom-properties'}
  ],

  files () {
    if (!this.project)
      return this._super.call (this, ...arguments);

    let files = this._super.call (this, ...arguments);

    if (this.project.isEmberCLIAddon ()) {
      // Remove the files that to not pertain to add-ons.
      files = files.filter (item => item !== '__root__/styles/_app-theme.scss');

      if (this.project.has ('tests/dummy/app/styles/_app-theme.scss'))
        files = files.filter (item => item !== 'tests/dummy/app/styles/_app-theme.scss');
    }
    else {
      // Remove files that do not pertain to applications projects.
      files = files.filter (item => item !== 'tests/dummy/app/styles/_app-theme.scss');

      if (this.project.has ('app/styles/_app-theme.scss'))
        files = files.filter (item => item !== '__root__/styles/_app-theme.scss');
    }

    return files;
  },
});
