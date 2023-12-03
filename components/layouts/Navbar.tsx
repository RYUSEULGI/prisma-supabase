import Link from 'next/link'
import Logo from '../common/Logo'

export default async function Navbar() {
  return (
    <nav className="relative flex items-center justify-between p-4 lg:px-6">
      <div className="flex w-full items-center">
        <div className="flex w-full md:w-1/3">
          <Link
            href="/"
            className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6"
          >
            <Logo />
            <div className="ml-2 flex-none text-sm font-medium uppercase md:hidden lg:block">
              Next-hr
            </div>
          </Link>
        </div>
      </div>
    </nav>
  )
}
