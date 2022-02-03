import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main';
import 'bootstrap/dist/css/bootstrap.min.css';


// bring in store and provider from redux
function App() {
	return (
		<div className='wholeApp'>
			<Header />
			<Main />
			<Footer />
		</div>
	);
}

export default App;
