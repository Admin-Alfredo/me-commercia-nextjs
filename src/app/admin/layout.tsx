import { ReactNode } from "react";
import Header from '../components/Header'
export default function LayoutAdmin({ children }: { children: ReactNode }) {

  return (
    <>
      <Header />
      {children}
    </>
  )
}
