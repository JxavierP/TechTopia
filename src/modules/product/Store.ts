import { createStore } from "solid-js/store";

type Image = {
  url: string;
  fileName: string;
};

interface ListItem {
  id: string;
  list: Image[];
}

export const [store, setStore] = createStore({
  viewerImage: "",
  imageList: {
    id: "",
    list: [],
  } as ListItem,
})