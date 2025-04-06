import { createFileRoute } from '@tanstack/solid-router'
import ProductCard from '../components/Product/Card'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <>
    <section class='flex flex-col w-full justify-start'>
      <span class='font-lato font-semibold text-2xl my-3'>Featured This Month</span>
      <ul class='flex gap-x-8'>
        <li>
          <ProductCard />
        </li>
        <li>
          <ProductCard />
        </li>
        <li>
          <ProductCard />
        </li>
      </ul>
    </section>
  </>
}
