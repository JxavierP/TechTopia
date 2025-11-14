import { createContext, useContext, type JSX } from "solid-js";
import { createStore } from "solid-js/store";

type Image = {
  url: string;
  fileName: string;
};

interface ListItem {
  id: string;
  list: Image[];
}

function useCarouselProviderValue() {
  const [carousel, setCarouselStore] = createStore({
    viewerImage: "",
    imageList: {
      id: "",
      list: [],
    } as ListItem,
  });
  return { carousel, setCarouselStore };
}

export type CarouselContextType = ReturnType<typeof useCarouselProviderValue>;

const CarouselContext = createContext<CarouselContextType | undefined>(undefined);

export const CarouselProdivder = (props: { children: JSX.Element }) => {
  const value = useCarouselProviderValue();
  return <CarouselContext.Provider value={value}>{props.children}</CarouselContext.Provider>
}

export function useCarouselStore() {
  const context = useContext(CarouselContext);
  if (context === undefined) {
    throw new Error(`useCarouselContext must be used within a CarouselProvider`);
  }
  return context;
}

// import { createStore } from "solid-js/store";
//
// type Image = {
//   url: string;
//   fileName: string;
// };
//
// interface ListItem {
//   id: string;
//   list: Image[];
// }
//
// export const [store, setStore] = createStore({
//   viewerImage: "",
//   imageList: {
//     id: "",
//     list: [],
//   } as ListItem,
// })
