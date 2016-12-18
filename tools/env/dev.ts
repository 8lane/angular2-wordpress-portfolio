import { EnvConfig } from './env-config.interface';

const DevConfig: EnvConfig = {
  ENV: 'DEV'
  apiEndPoint: 'http://dev/folio/v5/wordpress/wp-json',
  apiNamespace: '/wp/v2'
};

export = DevConfig;
