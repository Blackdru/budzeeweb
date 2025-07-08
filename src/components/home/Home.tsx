import { Button } from "../ui/button";
import { FaAndroid, FaDownload, FaGamepad, FaBrain, FaTrophy } from "react-icons/fa";
import { apiRequest, API_ENDPOINTS } from "../../config/api";

export default function Home() {
  const handleDownload = async () => {
    // Track download
    try {
      await apiRequest(API_ENDPOINTS.downloadTrack, {
        method: "POST",
        body: JSON.stringify({
          source: "website-home",
          userAgent: navigator.userAgent
        })
      });
    } catch (error) {
      console.log('Download tracking failed:', error);
    }

    // Update to match your actual APK filename
    const apkUrl = "/Budzee.apk";
  
    // Create a temporary <a> element to trigger download
    const link = document.createElement("a");
    link.href = apkUrl;
    link.setAttribute("download", "Budzee.apk");
    document.body.appendChild(link);
    link.click();
  
    // Clean up the temporary link element
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card opacity-90"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-accent/20 rounded-full blur-xl animate-pulse delay-500"></div>
      
      <div className="text-center relative z-10 px-4 max-w-6xl mx-auto">
        {/* App Icon/Logo Area */}
        <div className="mb-8 flex justify-center">
          <div className="w-100 h-5 bg-gradient-to-br from-primary to-secondary rounded-3xl flex items-center justify-center shadow-2xl shadow-primary/25">
            <FaBrain className="text-4xl text-white" />
          </div>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-primary via-secondary to-accent text-transparent bg-clip-text">
            BUDZEE
          </span>
        </h1>
        
        <h2 className="text-2xl md:text-4xl font-semibold mb-4 text-muted-foreground">
          Ultimate Memory Game Challenge
        </h2>

        <p className="text-lg md:text-xl mb-12 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Test your memory skills in this exciting multiplayer game. Challenge friends, win rewards, and become the memory champion!
        </p>

        {/* Feature Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto">
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 hover:bg-card/70 transition-all duration-300">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                <FaGamepad className="text-2xl text-primary" />
              </div>
            </div>
            <p className="text-3xl font-bold text-primary mb-2">Multiplayer</p>
            <p className="text-muted-foreground">Real-time gaming</p>
          </div>
          
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 hover:bg-card/70 transition-all duration-300">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center">
                <FaBrain className="text-2xl text-secondary" />
              </div>
            </div>
            <p className="text-3xl font-bold text-secondary mb-2">Memory</p>
            <p className="text-muted-foreground">Brain training</p>
          </div>
          
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 hover:bg-card/70 transition-all duration-300">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
                <FaTrophy className="text-2xl text-accent" />
              </div>
            </div>
            <p className="text-3xl font-bold text-accent mb-2">Rewards</p>
            <p className="text-muted-foreground">Win prizes</p>
          </div>
        </div>

        {/* Download Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-8">
          <Button 
            onClick={handleDownload} 
            className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 ease-in-out hover:scale-105 shadow-lg shadow-primary/25 min-w-[200px]"
          >
            <FaAndroid className="mr-3 h-6 w-6" />
            Download APK
          </Button>
          
          <Button 
            variant="outline" 
            className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 ease-in-out hover:scale-105 min-w-[200px]"
          >
            <FaDownload className="mr-3 h-5 w-5" />
            Learn More
          </Button>
        </div>

        {/* App Info */}
        <div className="text-sm text-muted-foreground space-y-2">
          <p>🎮 Free to Play • 🧠 Memory Training • 🏆 Multiplayer Competitions</p>
          <p>Compatible with Android 8.0+ • Size: ~45MB</p>
        </div>
      </div>
    </section>
  )
}