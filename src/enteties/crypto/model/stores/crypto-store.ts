import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { Crypto, IdList } from '../../api';

interface ICryptoStore {
  idList: IdList[];
  setIdList: (newList: IdList[]) => void;
  list: Crypto[];
  setList: (newList: Crypto[]) => void;
}

export const useCryptoStore = create<ICryptoStore>()(
  persist(
    (set) => ({
      idList: [],
      setIdList: (newList) => set({ idList: [...newList] }),
      list: [],
      setList: (newList) => set({ list: [...newList] }),
    }),
    {
      name: 'crypto-store',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
