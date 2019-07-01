import React from 'react';
import Header from './components/Header';
import ProductsContainer from './containers/ProductsContainer';
import Footer from './components/Footer';
import CartContainer from './containers/CartContainer';
import MessageContainer from './containers/MessageContainer';
// import Message from './components/Message';
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
                    <MessageContainer />
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
