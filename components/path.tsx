import Link from "next/link"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export function Path() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink>
            <BreadcrumbPage>Home</BreadcrumbPage>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink>
            <Link href="/services">Services</Link>
          </BreadcrumbLink>
          <BreadcrumbSeparator/>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink>
            <Link href="/joinus">Join Us</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <Link href="/dataset">Dataset Models</Link>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
