import type fetch from 'node-fetch';
import {createInjectionToken, Dependency} from '../lib/injector.js';
import {CryptoService} from '../services/crypto.js';
import {Logger} from './logger.js';

export interface IsomorphicCoreType {
	fetch: typeof fetch;
	crypto: CryptoService;
	logger: Dependency<typeof Logger>;
	encoding: {
		atob: (text: string) => string;
		btoa: (binary: string) => string;
	};
}

export const IsomorphicCore = createInjectionToken<IsomorphicCoreType>('IsomorphicCore');
