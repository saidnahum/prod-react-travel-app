import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import './App.css';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';


function App() {
	return (
		<div >
			<Router>
				<Navbar/>
				<div style={{ overflow: 'hidden' }}>
					<Routes>
						<Route exact path="/" element={<Home />} />
						<Route path="/services" element={<Services />} />
						<Route path="/products" element={<Products />} />
						<Route path="/sign-up" element={<SignUp />} />
					</Routes>
				</div>
			</Router>
		</div>
	);
}

export default App;
