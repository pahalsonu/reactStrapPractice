import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from './component/Carousel'
import Navbar from './component/Navbar'
import Strapcarousel from './component/Strapcarousel'
class App extends React.Component {
    render() {
        return (
            <div >
                <Navbar />
                <Strapcarousel  />
                <Carousel />

            </div>
        )
    }

}
export default App;