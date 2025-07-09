import { FaYoutube, FaInstagram, FaDiscord, FaBrain, FaAndroid, FaEnvelope } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  const handleDownload = () => {
    const apkUrl = "/Budzee.apk";
    const link = document.createElement("a");
    link.href = apkUrl;
    link.setAttribute("download", "Budzee.apk");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <footer className="bg-card/30 backdrop-blur-sm border-t border-border text-muted-foreground py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Budzee Column */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                <FaBrain className="text-xl text-white" />
              </div>
              <h3 className="text-foreground font-bold text-xl">Budzee</h3>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              The ultimate memory game experience. Train your brain, challenge friends, and win exciting rewards in our multiplayer memory games.
            </p>
            <button 
              onClick={handleDownload}
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-bold py-2 px-4 rounded-xl text-sm transition-all duration-300 flex items-center gap-2"
            >
              <FaAndroid className="text-sm" />
              Download APK
            </button>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-foreground font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => navigate("/")} className="hover:text-foreground transition-colors">Home</button></li>
              <li><button onClick={() => navigate("/terms")} className="hover:text-foreground transition-colors">Terms & Conditions</button></li>
              <li><button onClick={() => navigate("/privacy")} className="hover:text-foreground transition-colors">Privacy Policy</button></li>
              <li><button onClick={() => navigate("/feedback")} className="hover:text-foreground transition-colors">Feedback</button></li>
            </ul>
          </div>

          {/* Game Features Column */}
          <div>
            <h3 className="text-foreground font-bold mb-4">Game Features</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-foreground transition-colors">Memory Training</li>
              <li className="hover:text-foreground transition-colors">Multiplayer Battles</li>
              <li className="hover:text-foreground transition-colors">Real-time Gaming</li>
              <li className="hover:text-foreground transition-colors">Reward System</li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-foreground font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-primary" />
                Email : support@budzee.in
              </li>
              <li className="flex space-x-4 pt-2">
                <a href="#" className="hover:text-primary transition-colors">
                  <FaYoutube className="w-5 h-5" />
                  <span className="sr-only">YouTube</span>
                </a>
                <a href="#" className="hover:text-secondary transition-colors">
                  <FaDiscord className="w-5 h-5" />
                  <span className="sr-only">Discord</span>
                </a>
                <a href="#" className="hover:text-accent transition-colors">
                  <FaInstagram className="w-5 h-5" />
                  <span className="sr-only">Instagram</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 mt-8 border-t border-border text-sm">
          <p>
            © 2025{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-semibold">Budzee</span>
            {' '}| All Rights Reserved
          </p>
          <p>Budrock Technologies Private Limited</p>
        </div>
      </div>
    </footer>
  )
}