import { Outlet, createRootRouteWithContext } from '@tanstack/solid-router'
import Header from '../components/Header'
// import { TanStackRouterDevtools } from '@tanstack/solid-router-devtools'

export const Route = createRootRouteWithContext()({
  component: RootComponent,
})

function RootComponent() {
  return (
    <div class='flex h-screen flex-col overflow-hidden bg-[#f6f6f6]'>
      <Header />
      <div class='px-8'>
        <Outlet />
      </div>
      {/* <TanStackRouterDevtools /> */}
    </div>
  )
}
