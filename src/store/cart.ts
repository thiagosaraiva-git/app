import { atom } from "jotai";
import { Shoe } from "@/types/shoe";

const cartAtom = atom<Shoe[]>([]);

export { cartAtom };
