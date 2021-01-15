import Navbar from "./Navbar"
import Head from "next/head"
const Layout = (props) => {
	return (
		<div>
			<Head>
				<title>BitzPrice</title>
				<link rel="stylesheet" href="https://bootswatch.com/4/flatly/bootstrap.min.css"></link>
			</Head>
			<Navbar/>
			{props.children}
		</div>
	)
}

export default Layout
