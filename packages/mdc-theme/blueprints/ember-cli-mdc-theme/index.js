/* eslint-env node */
module.exports = {
  description: '',

  normalizeEntityName() {}, // no-op since we're just adding dependencies

  // locals(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }

  afterInstall () {
    return this.addPackagesToProject ([
      {name: '@material/theme'},
    ]).then (() => {
      return this.addAddonsToProject({
        packages: [
          {name: 'ember-cli-mdc-base'}
        ]
      });
    });
  }
};