import { CryptoChartData } from '@/enteties/crypto/api';

export const transChartColor = (
  chartPriceData: CryptoChartData | undefined
) => {
  if (chartPriceData && chartPriceData.prices) {
    if (
      chartPriceData.prices[chartPriceData.prices.length - 1][1] >
      chartPriceData.prices[chartPriceData.prices.length - 2][1]
    ) {
      return 'var(--color-success)';
    } else {
      return 'var(--color-fail)';
    }
  }
};
