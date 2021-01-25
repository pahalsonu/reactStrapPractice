import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from './component/Carousel'
import Navbar from './component/Navbar'
class App extends React.Component {
    render() {
        return (
            <div >
                <Navbar />
                <Carousel />

            </div>
        )
    }

}
export default App;