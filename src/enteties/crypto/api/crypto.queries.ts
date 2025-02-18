import { queryOptions } from '@tanstack/react-query';
import { getCryptoList } from './get-crypto-list';
import { getCryptoDetails } from './get-crypto-details';
import { getCryptoIdList } from './get-crypto-id-list';

export const cryptoQueries = {
  all: () => ['cryptos'],
  lists: () => [...cryptoQueries.all(), 'list'],
  list: (vsCurrency: string, page: number, perPage?: number) =>
    queryOptions({
      queryKey: [...cryptoQueries.lists(), vsCurrency, page, perPage],
      queryFn: () => getCryptoList(vsCurrency, page, perPage),
    }),
  idlists: () => [...cryptoQueries.all(), 'idlist'],
  idlist: () =>
    queryOptions({
      queryKey: [...cryptoQueries.lists()],
      queryFn: () => getCryptoIdList(),
    }),
  details: () => [...cryptoQueries.all(), 'detail'],
  detail: (id: string, vsCurrency: string, days: number) =>
    queryOptions({
      queryKey: [...cryptoQueries.details(), id, vsCurrency, days],
      queryFn: () => getCryptoDetails(id, vsCurrency, days),
    }),
};
