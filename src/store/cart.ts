import { atom } from "jotai";

type State = {
  name: string;
  price: number;
  image: string;
  quantity: number;
};

const cartAtom = atom<State[]>([]);

export { cartAtom };
