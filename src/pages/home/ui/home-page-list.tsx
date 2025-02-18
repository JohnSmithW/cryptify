import { List } from '@/shared/ui/list';
import { CryptoChart } from '@/widgets/crypto-chart';
import { useCryptoList } from '@/widgets/crypto-chart/lib/hooks/useCryptoList';
import { Loader } from '@/shared/ui/loader';
// import { useState } from 'react';

export const HomePageList = () => {
  // const [page, setPage] = useState(1);
  // const [perPage, setPerPage] = useState(10);
  // const [currency, setCurrency] = useState('usd');
  const page = 1;
  const perPage = 10;
  const currency = 'usd';
  const { isLoading, list } = useCryptoList(currency, page, perPage);

  return isLoading ? (
    <Loader />
  ) : (
    <List className="w-full">
      {list.map(({ id }, index) => (
        <CryptoChart key={index} id={id} />
      ))}
    </List>
  );
};
