import Link from "next/link"

const Navbar = () =>(
	<div>
		<ul>
			<li><Link href="/"><button>Home</button></Link></li>
			<li><Link href="/about"><button>About</button></Link></li>
		</ul>


	</div>
)

export default Navbar;