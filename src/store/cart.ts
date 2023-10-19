import { atom } from "jotai";

type State = {
  name: string;
  brand: string;
  price: number;
  image: string;
  quantity: number;
};

const cartAtom = atom<State[]>([]);

export { cartAtom };
