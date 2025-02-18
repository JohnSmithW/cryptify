'use client';

import { DollarSign } from 'lucide-react';
import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/shared/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/shared/ui/chart';
import { useCrypto } from '../lib/hooks/useCrypto';
// import { useState } from 'react';
import { transChartData } from '../../../shared/utils/transformChartData';
import { transChartColor } from '../../../shared/utils/transformChartColor';

interface ICryptoChartProps {
  id: string;
}

const chartConfig = {
  desktop: {
    label: 'Desktop',
    color: 'hsl(var(--chart-1))',
  },
} satisfies ChartConfig;

export const CryptoChart = ({ id }: ICryptoChartProps) => {
  // const [vsCurrency, setVsCurrency] = useState('usd');
  // const [days, setDays] = useState(7);

  const vsCurrency = 'usd';
  const days = 7;

  const { isLoading, data } = useCrypto(id, vsCurrency, days);
  const { name, symbol, image, current_price } = data;

  return isLoading ? null : (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex flex-col">
          {symbol && <CardTitle>{symbol}</CardTitle>}
          {name && <CardDescription>{name}</CardDescription>}
        </div>
        <img src={image} alt="" className="h-8 w-8" />
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={transChartData(data.chartPriceData, 'prices')}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" hideLabel />}
            />
            <Area
              dataKey="price"
              type="linear"
              fill={transChartColor(data?.chartPriceData)}
              fillOpacity={0.4}
              stroke="var(--color-success-dark)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 leading-none font-medium">
              current price{' '}
              <div className="flex items-center">
                <DollarSign className="h-4 w-4" /> {current_price}
              </div>
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};
