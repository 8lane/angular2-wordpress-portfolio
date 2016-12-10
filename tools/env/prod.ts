import {EnvConfig} from './env-config.interface';

const ProdConfig: EnvConfig = {
	ENV: 'PROD',
	apiEndPoint: 'http://tomchristian.co.uk/wordpress/wp-json',
	apiNamespace: '/wp/v2'
};

export = ProdConfig;
