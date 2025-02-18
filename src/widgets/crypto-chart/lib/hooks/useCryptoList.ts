import { useQuery } from '@tanstack/react-query';
import { cryptoQueries, useCryptoStore } from '@/enteties/crypto';
import { useEffect } from 'react';

export const useCryptoList = (
  currency: string,
  page: number,
  perPage: number
) => {
  const { data, error, isLoading } = useQuery(
    cryptoQueries.list(currency, page, perPage)
  );

  const { list, setList } = useCryptoStore((state) => state);

  useEffect(() => {
    if (!isLoading && data && !list.length) {
      setList(data.result);
    }
  }, [isLoading, data, setList, list]);

  return { isLoading, list, error };
};
