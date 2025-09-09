import Container from "../ui/Container";



export default function Footer(){
return (
<footer className="border-t border-white/10">
<Container className="py-10 text-sm text-white/70 flex flex-col md:flex-row items-center justify-between gap-4">
<p>© {new Date().getFullYear()} Agurchu Media Production. All rights reserved.</p>
<div className="flex items-center gap-4">
<a href="#" className="hover:text-secondary-1">YouTube</a>
<a href="#" className="hover:text-secondary-1">Instagram</a>
<a href="#" className="hover:text-secondary-1">Facebook</a>
</div>
</Container>
</footer>
)
}