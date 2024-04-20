import React, { cloneElement, useMemo } from 'react'
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

export const Layout = ({ children }: { children: React.ReactNode }) => {

  const renderChildren = useMemo(() => {
    const childArray = Array.isArray(children) ? children : [children];

    return (
      childArray.map((child: React.FunctionComponentElement<any>, index) => {
        return cloneElement(child, {
          key: index,
        });
      })
    );
  }, [children]);

  return (
    <div>
      <Header />
      <main className="overflow-y-auto mt-14">{renderChildren}</main>
      <Footer />
    </div>
  )
}
