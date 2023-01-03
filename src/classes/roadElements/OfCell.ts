import { Cover } from "./Cell";

export default interface OfCell {
  get getCover(): Cover;
  set setCover(cover: Cover);
}
