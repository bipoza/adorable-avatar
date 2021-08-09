import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { angularOutputTarget } from '@stencil/angular-output-target';
export const config: Config = {
  namespace: 'adorable-avatar',
  outputTargets: [
    angularOutputTarget({
      componentCorePackage: '@adorable-avatar/core',
      directivesProxyFile: '../angular/src/directives/proxies.ts',
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      copy: [
        { src: '**/*.scss' },
        { src: '**/assets' },
        { src: '**/assets', dest: '../angular/assets' }
      ],
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  plugins: [
    sass()
  ]
};
