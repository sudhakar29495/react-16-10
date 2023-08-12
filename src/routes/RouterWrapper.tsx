const RouterWrapper = (props: any) => {
  const { children } = props;
  return (
    <>
      <header className="border-b border-solid h-[40px] flex items-center px-5">Header</header>
      <section className="flex">
        <aside className="border-r border-solid h-[calc(100vh-40px)] p-10">Side menu</aside>
        <main className="p-5">
          {children}
        </main>
      </section>
    </>
  )
}

export default RouterWrapper;
