
import './App.css';
import data from './data';

function App() {
  return (
    <div className="grid-container">
    <header className="header">
      <div className="brand">
        <button onclick="openMenu()">
          &#9776;
        </button>
        <a href="index.html">amazona</a>
      </div>
      <div className="header-links">
        <a href="/cart">Cart</a>
        <a href="/signin">Sign In</a>
      </div>
    </header>
    <aside className="sidebar">
      <h3>Shopping Categories</h3>
      <button className="sidebar-close-button" onclick="closeMenu()">x</button>
      <ul>
        <li>
          <a href="index.html">Pants</a>
        </li>

        <li>
          <a href="index.html">Shirts</a>
        </li>

      </ul>
    </aside>
    <main className="main">
      <div className="row center">
{data.products.map((product)=>
  
            <div key={'/product/{$product._id}'}className="card">
              <img className="product-image" src={product.image} alt="product" />
              <div className="product-name">
                <a href="product.html">{product.name}</a>
              </div>
              <div className="product-brand">{product.brand}</div>
              <div className="product-price">{product.price}</div>
              <div className="rating">
                <span>
                  <i className="fa fa-star"></i>
                </span>
                <span>
                  <i className="fa fa-star"></i>
                </span>
                <span>
                  <i className="fa fa-star"></i>
                </span>
                <span>
                  <i className="fa fa-star"></i>
                </span>
              </div>
              <div className="product-rating">{product.numberReviews}(10 Reviews)</div>
            </div>
         
          
          
             
        
)}
         
      </div>

    </main>
    <footer className="footer">
      All right reserved.
    </footer>
  </div>
  );
}

export default App;
