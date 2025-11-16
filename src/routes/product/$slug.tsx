import { queryOptions } from "@tanstack/solid-query";
import { createFileRoute } from "@tanstack/solid-router";
import { queryClient } from "../../utils/queryClient";
import { client, readFragment } from "../../graphql/client";
import ProductPage from "../../modules/product/components/ProductPage";
import { CarouselViewFragment } from "../../modules/product/fragments/ProductCarousel.fragment";
import ProductPageFragment from "../../modules/product/fragments/ProductPage.fragment";
import ProductSidebarFragment from "../../modules/product/fragments/ProductSidebar.fragment";
import { ColorSelectorFragment } from "../../modules/product/fragments/VariantSelector.fragment";
import ProductBySlugQuery from "../../modules/product/queries/fetchProductBySlug";
import { maskFragments } from "gql.tada";
import { useCarouselStore } from "../../modules/product/Store";

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
  beforeLoad: () => ({ showSubHeader: false }),
  component: RouteComponent,
  loader: async ({ params: { slug } }) => {
    return queryClient.ensureQueryData(productQueryOptions(slug));
  },
});

function RouteComponent() {
  const data = Route.useLoaderData();
  const product = readFragment(ProductPageFragment, data().variant);
  const carouselData = readFragment(CarouselViewFragment, product!);
  const sidebarData = readFragment(ProductSidebarFragment, product!);
  const productColors = readFragment(ColorSelectorFragment, sidebarData.colors[0]);
  if (product) {
    useCarouselStore().setCarouselStore({
      viewerImage: productColors.images[0].url,
      imageList: { id: productColors.id, list: productColors.images },
    });
  }
  return (
    <ProductPage
      carouselProduct={maskFragments([CarouselViewFragment], carouselData)}
      sidebarProduct={maskFragments([ProductSidebarFragment], sidebarData)}
    />
  );
}
