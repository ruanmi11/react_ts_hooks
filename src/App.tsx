import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styles from "./App.module.css";
import { HomePage,RegisterPage,SignInPage,DetailPage,SearchPage,ShoppingCart } from "./pages";
// import { Redirect } from 'react-router-dom';
// import { useSelector} from './redux/hooks'

// const PrivateRoute=({component,isAuthenticates,...rest})=>{
// 	const routeComponent=(props)=>{
// 		return isAuthenticates ? (React.createElement(component,props))
// 		: (<Redirect to={{pathname:'/signIn'}}/>)
// 	}
// 	return <Route render={routeComponent} {...rest}/>
// }

function App() {
	// const jwt=useSelector(state=>state.user.token);
	return (
		<div className={styles.App}>
			<BrowserRouter>
				<Switch>
					<Route path="/" exact component={HomePage} />
					<Route path="/signIn" component={SignInPage}/>
					<Route path="/register" component={RegisterPage}/>
					<Route path="/detail/:touristRouteId" component={DetailPage}/>
					<Route path="/search/:keywords?" component={SearchPage}/>
					<Route path='/shoppingCart' component={ShoppingCart}/>
					{/* <PrivateRoute 
					isAuthenticates={jwt!==null}
					path='/shoppingCart' component={ShoppingCart}/> */}
					<Route render={() => <h1>404 页面去火星了</h1>}/>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
