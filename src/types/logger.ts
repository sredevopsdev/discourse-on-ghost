import {createInjectionToken} from '../lib/injector.js';

type AvailableLoggingMethods = 'trace' | 'debug' | 'info' | 'warn' | 'error';
type LoggerType = {
	[k in AvailableLoggingMethods]: (...args: any[]) => void;
};

export const Logger = createInjectionToken<LoggerType>('logger');
