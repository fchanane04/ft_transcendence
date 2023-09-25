import logoWite from '/logo-white.svg'

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <a href="/"><img src={logoWite} alt="sharks" className='logo'/></a>
          </div>
          <div className="col-6"></div>
        </div>
      </div>
    </header>
  );
}

export default Header;
