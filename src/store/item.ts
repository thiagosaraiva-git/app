import { atom } from "jotai";

type State = {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

const initialState: State = {
  id: 0,
  name: "",
  image: "",
  price: 0,
  quantity: 0,
};

const itemAtom = atom(initialState);

export { itemAtom };
