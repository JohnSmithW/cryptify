import { useEffect, useState } from 'react';
import { axiosInstance } from '@/shared/api';

const HomePage = () => {
  const [price, setPrice] = useState(null);
  const getCryptoPrice = async (symbol = 'bitcoin') => {
    const res = await axiosInstance.get(
      `/simple/price?ids=${symbol}&vs_currencies=usd`
    );
    return res.data[symbol].usd;
  };

  useEffect(() => {
    async function fetchPrice() {
      const price = await getCryptoPrice('bitcoin');
      setPrice(price);
    }
    fetchPrice();
  }, []);

  return (
    <div data-testid="home-page">
      <p>Bitcoin Price: ${price}</p>
    </div>
  );
};

export { HomePage };
