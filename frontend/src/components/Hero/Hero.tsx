type Props = {
  background: string;
  children: React.ReactNode;
  className?: string;
};

export default function Hero({
  background,
  children,
  className,
}: Readonly<Props>) {
  return (
    <>
      {/* putting logic to center stuff here for now but probably best to just have css done to the child
       before passing see how easy or hard it is to do that? Otherwise extract into a css module file*/}
      <section
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "50vh",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          //   flexDirection: "column",
        }}
      >
        <div
          className={className}
          style={{
            maxWidth: "min(1200px, 100vw)",
            margin: "0 auto",
            padding: "0 1.5rem",
          }}
        >
          {children}
        </div>
      </section>
    </>
  );
}
