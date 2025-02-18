import { coingeckoInstance } from '../../../shared/api';
import { IdList } from './types';

export const getCryptoIdList = (): Promise<{ result: IdList[] }> => {
  return coingeckoInstance.get('/coins/list').then((res) => {
    return { result: res.data };
  });
};
