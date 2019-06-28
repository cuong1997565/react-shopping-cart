import React from 'react';
import Header from './components/Header';
import ProductsContainer from './containers/ProductsContainer';
import Message from './components/Message';
import Cart from './components/Cart';
import Footer from './components/Footer';
import CartContainer from './containers/CartContainer';
function App() {
  return (
    <div>
       <div>
        {/* header */}
            <Header />
        {/* end header */}
        <main id="mainContainer">
            <div className="container">
                {/* Products */}
                    <ProductsContainer />
                {/* end Products */}
                {/** Message */}
                    <Message />
                {/**end Message */}
                {/**Cart */}
                    <CartContainer />
                {/**end Cart */}
               
            </div>
        </main>
        { /** footer */ }
            <Footer />
        { /** end footer */ }
    </div>
    </div>
  );
}

export default App;
