import { useState } from "react"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { Button } from "../ui/button"
import { FaBrain } from "react-icons/fa"
import { useNavigate, useLocation } from "react-router-dom"

export default function Navbar() {
  const [isSheetOpen, setIsSheetOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const navItems = [
    { href: "home", label: "Home" },
    { href: "terms", label: "Terms" },
    { href: "privacy", label: "Privacy" },
    { href: "contact", label: "Contact" },
    { href: "feedback", label: "Feedback" },
  ]

  // derive activeSection from current pathname
  const activeSection = location.pathname === "/" ? "home" : location.pathname.slice(1)

  const handleDownload = () => {
    const apkUrl = "/Budzee.apk";
    const link = document.createElement("a");
    link.href = apkUrl;
    link.setAttribute("download", "Budzee.apk");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleNavClick = (href: string) => {
    if (href === "home") {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      navigate("/")
    } else {
      navigate(`/${href}`)
    }
    setIsSheetOpen(false)
  }

  return (
    <header className="px-6 py-4 flex items-center justify-between fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md border-b border-border z-20">
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <img src="/logo.png" alt="Budzee Logo" className="w-10 h-10 rounded-xl" />
        <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
          Budzee
        </span>
      </div>

      {/* Desktop nav */}
      <nav className="hidden lg:flex items-center space-x-2 flex-grow justify-center">
        {navItems.map((item) => (
          <button
            key={item.href}
            onClick={() => handleNavClick(item.href)}
            className={`px-6 py-2 rounded-xl font-medium transition-all duration-300 ease-in-out ${
              activeSection === item.href
                ? "bg-primary text-white shadow-lg shadow-primary/25"
                : "text-muted-foreground hover:text-foreground hover:bg-card"
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>

      {/* Download Button - Desktop */}
      <div className="hidden lg:block">
        <Button 
          onClick={() => handleNavClick("home")}
          className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-medium px-6 py-2 rounded-xl transition-all duration-300"
        >
          Download
        </Button>
      </div>

      {/* Mobile nav */}
      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="lg:hidden text-foreground">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Open menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="bg-card border-border">
          <SheetHeader>
            <SheetTitle className="text-foreground flex items-center space-x-2">
              <img src="/logo.png" alt="Budzee Logo" className="w-8 h-8 rounded-lg" />
              <span>Budzee</span>
            </SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col space-y-3 mt-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleDownload()}
                className={`px-4 py-3 rounded-xl font-medium transition-all duration-300 ease-in-out text-left ${
                  activeSection === item.href
                    ? "bg-primary text-white shadow-lg shadow-primary/25"
                    : "text-muted-foreground hover:text-foreground hover:bg-background"
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4">
              <Button 
                onClick={() => handleNavClick("home")}
                className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-medium py-3 rounded-xl"
              >
                Download APK
              </Button>
            </div>
          </nav>
          <SheetClose className="sr-only">Close</SheetClose>
        </SheetContent>
      </Sheet>
    </header>
  )
}
