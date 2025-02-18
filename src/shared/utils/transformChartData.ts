import { DateTime } from 'luxon';
import { CryptoChartData } from '../../enteties/crypto/api';

export const transChartData = (
  rawData: CryptoChartData | undefined,
  key: keyof CryptoChartData
) => {
  if (rawData && rawData[key]) {
    const transformedData = rawData[key].map((item) => ({
      date: DateTime.fromMillis(item[0]),
      price: item[1].toFixed(3),
    }));

    return transformedData;
  }
};
