'use client'

import { Button } from "@/components/ui/button"
import { FaDownload, FaShieldAlt, FaCog, FaCheckCircle, FaAndroid, FaPlay } from "react-icons/fa"
import trackingService from "../../services/trackingService"

export default function Installation() {
  const handleDownload = async () => {
    // Track download
    await trackingService.trackDownload("website-installation");
    
    const apkUrl = "/Budzee.apk";
    const link = document.createElement("a");
    link.href = apkUrl;
    link.setAttribute("download", "Budzee.apk");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const steps = [
    {
      number: 1,
      icon: <FaDownload className="text-3xl" />,
      title: 'Download APK',
      description: "Click the download button to get Budzee APK file",
      color: "from-primary to-secondary"
    },
    {
      number: 2,
      icon: <FaCog className="text-3xl" />,
      title: 'Enable Unknown Sources',
      description: 'Go to Settings > Security > Allow Unknown Sources',
      color: "from-secondary to-accent"
    },
    {
      number: 3,
      icon: <FaShieldAlt className="text-3xl" />,
      title: 'Allow Installation',
      description: 'Tap "Allow" when prompted for installation permission',
      color: "from-accent to-primary"
    },
    {
      number: 4,
      icon: <FaCheckCircle className="text-3xl" />,
      title: 'Install & Play',
      description: 'Tap "Install" and start playing memory games!',
      color: "from-primary to-secondary"
    }
  ]

  return (
    <div className="w-full bg-gradient-to-br from-background via-card/20 to-background text-foreground py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-6">
            EASY <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">INSTALLATION</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get started with Budzee in just a few simple steps. Download and install our memory game app on your Android device.
          </p>
          <div className="flex justify-center flex-col sm:flex-row gap-6">
            <Button 
              onClick={handleDownload}
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-8 py-4 rounded-2xl text-lg font-bold shadow-lg shadow-primary/25 transition-all duration-300 hover:scale-105"
            >
              <FaAndroid className="mr-3 h-6 w-6" />
              DOWNLOAD APK
            </Button>
            <Button 
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-2xl font-bold transition-all duration-300 hover:scale-105"
            >
              <FaPlay className="mr-3 h-5 w-5" />
              WATCH DEMO
            </Button>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div 
              key={step.number}
              className="relative bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border hover:bg-card/70 transition-all duration-300 group"
            >
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                {step.number}
              </div>
              
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {step.icon}
              </div>
              
              {/* Content */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-foreground">System Requirements</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-muted-foreground">
              <div>
                <FaAndroid className="text-2xl text-secondary mx-auto mb-2" />
                <p className="font-semibold">Android 8.0+</p>
                <p className="text-sm">Compatible with most devices</p>
              </div>
              <div>
                <FaDownload className="text-2xl text-accent mx-auto mb-2" />
                <p className="font-semibold">~45MB</p>
                <p className="text-sm">Small download size</p>
              </div>
              <div>
                <FaShieldAlt className="text-2xl text-primary mx-auto mb-2" />
                <p className="font-semibold">100% Safe</p>
                <p className="text-sm">Virus-free & secure</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}