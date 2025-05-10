/* eslint-disable */
import * as types from './graphql';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "query FetchAllBrands {\n  brands {\n    id\n    name\n  }\n}": typeof types.FetchAllBrandsDocument,
    "query FetchAllSearchableProducts {\n  variants(where: {searchable: true}) {\n    ...ProductCardFields\n  }\n}": typeof types.FetchAllSearchableProductsDocument,
    "query FetchProductBySlug($slug: String!) {\n  variant(where: {slug: $slug}) {\n    ...ProductSidebarFields\n  }\n}": typeof types.FetchProductBySlugDocument,
    "query FetchProductsByTag($tag: String!) {\n  variants(where: {product: {tags_every: {name: $tag}}, searchable: true}) {\n    ...ProductCardFields\n  }\n}": typeof types.FetchProductsByTagDocument,
    "fragment ProductCardFields on Variant {\n  id\n  name\n  price\n  slug\n  product {\n    id\n    name\n    brand {\n      name\n    }\n  }\n  colors {\n    id\n    slug\n    name\n    images {\n      url\n      fileName\n    }\n  }\n  sizes {\n    value\n  }\n}": typeof types.ProductCardFieldsFragmentDoc,
    "fragment ImageListFields on Variant {\n  colors(first: 1) {\n    images {\n      url\n      fileName\n    }\n  }\n}": typeof types.ImageListFieldsFragmentDoc,
    "fragment ImageViewerFields on Variant {\n  name\n  colors {\n    images {\n      url\n      fileName\n    }\n  }\n  product {\n    name\n    brand {\n      name\n    }\n  }\n}": typeof types.ImageViewerFieldsFragmentDoc,
    "fragment ProductSidebarFields on Variant {\n  id\n  name\n  price\n  slug\n  colors {\n    ...ColorSelector\n  }\n  sizes {\n    value\n  }\n  product {\n    id\n    description\n    name\n    brand {\n      name\n    }\n    variants {\n      ...ModelSelector\n    }\n  }\n}\n\nfragment ColorSelector on ColorOption {\n  id\n  name\n  images {\n    url\n    fileName\n  }\n}\n\nfragment ModelSelector on Variant {\n  name\n  slug\n  colors {\n    id\n    name\n    images {\n      url\n      fileName\n    }\n  }\n}": typeof types.ProductSidebarFieldsFragmentDoc,
};
const documents: Documents = {
    "query FetchAllBrands {\n  brands {\n    id\n    name\n  }\n}": types.FetchAllBrandsDocument,
    "query FetchAllSearchableProducts {\n  variants(where: {searchable: true}) {\n    ...ProductCardFields\n  }\n}": types.FetchAllSearchableProductsDocument,
    "query FetchProductBySlug($slug: String!) {\n  variant(where: {slug: $slug}) {\n    ...ProductSidebarFields\n  }\n}": types.FetchProductBySlugDocument,
    "query FetchProductsByTag($tag: String!) {\n  variants(where: {product: {tags_every: {name: $tag}}, searchable: true}) {\n    ...ProductCardFields\n  }\n}": types.FetchProductsByTagDocument,
    "fragment ProductCardFields on Variant {\n  id\n  name\n  price\n  slug\n  product {\n    id\n    name\n    brand {\n      name\n    }\n  }\n  colors {\n    id\n    slug\n    name\n    images {\n      url\n      fileName\n    }\n  }\n  sizes {\n    value\n  }\n}": types.ProductCardFieldsFragmentDoc,
    "fragment ImageListFields on Variant {\n  colors(first: 1) {\n    images {\n      url\n      fileName\n    }\n  }\n}": types.ImageListFieldsFragmentDoc,
    "fragment ImageViewerFields on Variant {\n  name\n  colors {\n    images {\n      url\n      fileName\n    }\n  }\n  product {\n    name\n    brand {\n      name\n    }\n  }\n}": types.ImageViewerFieldsFragmentDoc,
    "fragment ProductSidebarFields on Variant {\n  id\n  name\n  price\n  slug\n  colors {\n    ...ColorSelector\n  }\n  sizes {\n    value\n  }\n  product {\n    id\n    description\n    name\n    brand {\n      name\n    }\n    variants {\n      ...ModelSelector\n    }\n  }\n}\n\nfragment ColorSelector on ColorOption {\n  id\n  name\n  images {\n    url\n    fileName\n  }\n}\n\nfragment ModelSelector on Variant {\n  name\n  slug\n  colors {\n    id\n    name\n    images {\n      url\n      fileName\n    }\n  }\n}": types.ProductSidebarFieldsFragmentDoc,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query FetchAllBrands {\n  brands {\n    id\n    name\n  }\n}"): (typeof documents)["query FetchAllBrands {\n  brands {\n    id\n    name\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query FetchAllSearchableProducts {\n  variants(where: {searchable: true}) {\n    ...ProductCardFields\n  }\n}"): (typeof documents)["query FetchAllSearchableProducts {\n  variants(where: {searchable: true}) {\n    ...ProductCardFields\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query FetchProductBySlug($slug: String!) {\n  variant(where: {slug: $slug}) {\n    ...ProductSidebarFields\n  }\n}"): (typeof documents)["query FetchProductBySlug($slug: String!) {\n  variant(where: {slug: $slug}) {\n    ...ProductSidebarFields\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query FetchProductsByTag($tag: String!) {\n  variants(where: {product: {tags_every: {name: $tag}}, searchable: true}) {\n    ...ProductCardFields\n  }\n}"): (typeof documents)["query FetchProductsByTag($tag: String!) {\n  variants(where: {product: {tags_every: {name: $tag}}, searchable: true}) {\n    ...ProductCardFields\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductCardFields on Variant {\n  id\n  name\n  price\n  slug\n  product {\n    id\n    name\n    brand {\n      name\n    }\n  }\n  colors {\n    id\n    slug\n    name\n    images {\n      url\n      fileName\n    }\n  }\n  sizes {\n    value\n  }\n}"): (typeof documents)["fragment ProductCardFields on Variant {\n  id\n  name\n  price\n  slug\n  product {\n    id\n    name\n    brand {\n      name\n    }\n  }\n  colors {\n    id\n    slug\n    name\n    images {\n      url\n      fileName\n    }\n  }\n  sizes {\n    value\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ImageListFields on Variant {\n  colors(first: 1) {\n    images {\n      url\n      fileName\n    }\n  }\n}"): (typeof documents)["fragment ImageListFields on Variant {\n  colors(first: 1) {\n    images {\n      url\n      fileName\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ImageViewerFields on Variant {\n  name\n  colors {\n    images {\n      url\n      fileName\n    }\n  }\n  product {\n    name\n    brand {\n      name\n    }\n  }\n}"): (typeof documents)["fragment ImageViewerFields on Variant {\n  name\n  colors {\n    images {\n      url\n      fileName\n    }\n  }\n  product {\n    name\n    brand {\n      name\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductSidebarFields on Variant {\n  id\n  name\n  price\n  slug\n  colors {\n    ...ColorSelector\n  }\n  sizes {\n    value\n  }\n  product {\n    id\n    description\n    name\n    brand {\n      name\n    }\n    variants {\n      ...ModelSelector\n    }\n  }\n}\n\nfragment ColorSelector on ColorOption {\n  id\n  name\n  images {\n    url\n    fileName\n  }\n}\n\nfragment ModelSelector on Variant {\n  name\n  slug\n  colors {\n    id\n    name\n    images {\n      url\n      fileName\n    }\n  }\n}"): (typeof documents)["fragment ProductSidebarFields on Variant {\n  id\n  name\n  price\n  slug\n  colors {\n    ...ColorSelector\n  }\n  sizes {\n    value\n  }\n  product {\n    id\n    description\n    name\n    brand {\n      name\n    }\n    variants {\n      ...ModelSelector\n    }\n  }\n}\n\nfragment ColorSelector on ColorOption {\n  id\n  name\n  images {\n    url\n    fileName\n  }\n}\n\nfragment ModelSelector on Variant {\n  name\n  slug\n  colors {\n    id\n    name\n    images {\n      url\n      fileName\n    }\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;