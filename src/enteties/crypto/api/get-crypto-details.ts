import { coingeckoInstance } from '../../../shared/api';
import { CryptoChartData } from './types';

export const getCryptoDetails = (
  id: string,
  vsCurrency: string = 'usd',
  days: number = 7
): Promise<{ result: CryptoChartData }> => {
  return coingeckoInstance
    .get(`/coins/${id}/market_chart?vs_currency=${vsCurrency}&days=${days}`)
    .then((res) => {
      console.log('API response:', res.data);
      return { result: res.data };
    });
};
