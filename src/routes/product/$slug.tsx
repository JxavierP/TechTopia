import { queryOptions } from "@tanstack/solid-query";
import { createFileRoute } from "@tanstack/solid-router";
import { queryClient } from "../../main";
import { client, readFragment, type FragmentOf } from "../../graphql/client";
import ProductView from "../../modules/product/ProductVIew";
import { setStore as productStore } from "../../modules/product/Store";
import { ProductBySlugQuery } from "../../graphql/queries";
import ImageViewerFragment from "../../modules/product/ProductCarousel/ImageViewer/fragment";
import ProductSidebarFragment, {
  ColorSelectorFragment,
} from "../../modules/product/ProductSidebar/Sidebar.fragment";
import ProductViewerFragment from "../../modules/product/ProductVIew/fragment";

const productQueryOptions = (slug: string) =>
  queryOptions({
    queryKey: ["product", slug],
    queryFn: async () => {
      return await client.request(ProductBySlugQuery, {
        slug: slug,
      });
    },
  });

export const Route = createFileRoute("/product/$slug")({
  component: RouteComponent,
  loader: async ({ params: { slug } }) => {
    return queryClient.ensureQueryData(productQueryOptions(slug));
  },
});

function RouteComponent() {
  const data = Route.useLoaderData();
  const product = readFragment(ProductViewerFragment, data().variant);
  const carouselData = readFragment(ImageViewerFragment, product!);
  const sidebarData = readFragment(ProductSidebarFragment, product!);
  const productColors = readFragment(ColorSelectorFragment, sidebarData.colors[0]);
  if (product) {
    productStore({
      viewerImage: productColors.images[0].url,
      imageList: { id: productColors.id, list: productColors.images },
    });
  }
  return (
    <ProductView
      carouselProduct={carouselData as unknown as FragmentOf<typeof ImageViewerFragment>}
      sidebarProduct={sidebarData as unknown as FragmentOf<typeof ProductSidebarFragment>}
    />
  );
}
