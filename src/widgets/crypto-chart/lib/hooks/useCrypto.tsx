import { useQuery } from '@tanstack/react-query';
import { cryptoQueries, useCryptoStore } from '@/enteties/crypto';
import { useEffect } from 'react';

export const useCrypto = (
  id: string,
  vsCurrency: string = 'usd',
  days: number = 7
) => {
  const { data, error, isLoading, isFetched } = useQuery(
    cryptoQueries.detail(id, vsCurrency, days)
  );

  const { list, setList } = useCryptoStore((state) => state);
  const index = list.findIndex((item) => item.id === id);

  useEffect(() => {
    if (isFetched && data) {
      if (index !== -1 && !list[index].chartPriceData) {
        const newList = [...list];
        newList[index].chartPriceData = data.result;

        setList([...newList]);
      }
    }
  }, [isFetched, data, list, setList, id, index]);

  return { isLoading, data: list[index], error };
};
