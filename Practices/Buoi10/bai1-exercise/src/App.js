import './App.css';
import {
	Link, 
	Routes, 
	Route, 
	useParams, //truyền parameters
	useNavigate //truyền màn hình này sang màn hình khác
} from 'react-router-dom';
import React, { useState, createContext } from 'react';

export const AuthContext = createContext();

export default function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const handleLogin = () => {
		setIsLoggedIn(true);
	}

	const handleLogout = () => {
		setIsLoggedIn(false);
	}


  	return (
		<div className="App">
			<h1>React Routing DOM v6</h1>
			<AuthContext.Provider value ={{isLoggedIn, handleLogin, handleLogout}}>
				{isLoggedIn ? (
					<nav>
						<ul className='products-component'>
							<li style={{listStyle: "none"}}>
								<Link to="/" >Home</Link>
								<ul style={{listStyle: "none"}}>
									<li>
										<Link to="/products" >Products</Link>
									</li>

									<li>
										<Link to="/invoices" >Invoices</Link>
									</li>

									<li>
										<Link to="/cart" >Cart</Link>
									</li>

									<li>
										<Link to="/profile" >Profile</Link>
									</li>

									<li>
										<Link to="/about" >About</Link>
									</li>
								</ul>
								<button onClick={handleLogout}>Logout</button>
							</li>
						</ul>
					</nav>
				): (
					<nav>
						<ul className='auth-component' style={{listStyle: "none"}}>
							<li className='auth-child'>
								<Link to="/auth" >Auth</Link>
								<ul className='login-register' style={{listStyle: "none"}}>
									<li>
										<Link to="/auth/login" >Login</Link>
									</li>
									<li>
										<Link to="/auth/register">Register</Link>
									</li>
								</ul>
							</li>
						</ul>
					</nav>
				)}
				<Routes>
					<Route path='/auth' element={<Auth/>}> 
						<Route  path='/auth/login' element={<Login/>}/>
						<Route  path='/auth/register' element={<Register/>}/>
					</Route>

					{isLoggedIn ? (
						<Route exact path='/' element={<Home/>}>
							<Route path='/products' element={<Products/>}>
								<Route path='/products/:id' element={({ params }) => <ProductDetails id={params.id}/>}/>
							</Route>
		
							<Route path='/invoices' element={<Invoices/>}>
								<Route path='invoices/:id' element={({ params }) =><InvoiceDetails id={params.id}/>}/>
							</Route>
			
							<Route path='/cart' element={<Cart/>}/>
							<Route path='/profile' element={<Profile/>}/>
							<Route path='/about' element={<About/>}/>
						</Route>
					):(
						<Navigate to="/auth/login" />
					)}
				
				<Route path="*" element={<NotFound />} />
			</Routes>
			</AuthContext.Provider>
		</div>
	);
}

// Components for Auth
function Auth() {
	return <h1>Auth</h1>;
}
function Login({ handleLogin }) {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		handleLogin({username, password});
	};
	return (
		<div>
			<h1>Login</h1>
			<form onSubmit={handleSubmit}>
				<label htmlFor='username'>Username:</label>
				<input type='text' id='username' value={username} onChange={(e) => setUsername(e.target.value)}></input>
				<br />
				<label htmlFor='password'>Password:</label>
				<input type='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
				<br />
				<button type="submit">Login</button>
			</form>
		</div>
	);
}
function Register() {
	return (
		<div>
			<h1>Register</h1>
		</div>
	)
}

//Components for Home
function Home() {
	return <h1>Home</h1>;
}

// Components for Products
function Products() {
	return <h1>Products</h1>;
}
function ProductDetails() {
	const { id } = useParams();
	return <h1>Product {id}</h1>;
}

// Components for Invoices
function Invoices() {
	return <h1>Invoices</h1>;
}
function InvoiceDetails() {
	const { id } = useParams();
	return <div>
		<h1>Invoice là: {id}</h1>
	</div>
}

// Components for Cart and Profile
function Cart() {
return <h1>Cart</h1>;
}
function Profile() {
return <h1>Profile</h1>;
}

// Component for About
function About() {
	return <h1>About</h1>;
}

function NotFound() {
	return <h2>Page not found</h2>;
}

