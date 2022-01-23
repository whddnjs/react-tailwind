import Header from './Header';

function DefaultLayout({ children }) {
  return (
    <div className="w-full h-screen font-nanum-regular">
      <Header />
      {children}
    </div>
  );
}

export default DefaultLayout;
