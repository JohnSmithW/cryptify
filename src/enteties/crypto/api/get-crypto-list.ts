import { coingeckoInstance } from '../../../shared/api';
import { Crypto } from './types';

export const getCryptoList = (
  vsCurrency: string = 'usd',
  page: number = 1,
  perPage?: number
): Promise<{ result: Crypto[] }> => {
  return coingeckoInstance
    .get(
      `/coins/markets?vs_currency=${vsCurrency}${page && `&page=${page}`}${perPage && `&per_page=${perPage}`}`
    )
    .then((res) => {
      return { result: res.data };
    });
};
