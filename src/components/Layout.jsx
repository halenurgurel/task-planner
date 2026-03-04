const Layout = ({ children }) => {
  return (
    <div className="min-h-screen">
      <main className="flex min-h-screen flex-col items-center justify-center py-8">
        {children}
      </main>
    </div>
  );
};
export default Layout;
