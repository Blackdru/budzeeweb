import { Link } from "react-router-dom";
import { FaBrain, FaShieldAlt, FaUsers, FaGamepad } from "react-icons/fa";

export default function Terms() {
  return (
    <div className="w-full min-h-screen bg-background text-foreground py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center">
              <FaBrain className="text-3xl text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
              Terms & Conditions
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Please read these terms carefully before using the Budzee memory game application
          </p>
        </div>

        <div className="space-y-8">
          <section className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                <FaShieldAlt className="text-primary text-sm" />
              </div>
              <h2 className="text-xl font-semibold text-foreground">1. Acceptance of Terms</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              By downloading, installing, or using the Budzee memory game application, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you may not use our application.
            </p>
          </section>

          <section className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-secondary/20 rounded-lg flex items-center justify-center">
                <FaUsers className="text-secondary text-sm" />
              </div>
              <h2 className="text-xl font-semibold text-foreground">2. Eligibility</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Users must be at least 13 years of age to use Budzee. Users under 18 must have parental consent. The application is intended for entertainment and educational purposes to improve memory and cognitive skills.
            </p>
          </section>

          <section className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center">
                <FaGamepad className="text-accent text-sm" />
              </div>
              <h2 className="text-xl font-semibold text-foreground">3. Game Rules & Fair Play</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Budzee features skill-based memory games with fair algorithms. Players must not use cheats, bots, or exploits. All game outcomes are determined by player skill and memory abilities. Multiplayer matches are conducted in real-time with anti-cheat measures.
            </p>
          </section>

          <section className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-foreground mb-4">4. User Accounts & Data</h2>
            <p className="text-muted-foreground leading-relaxed">
              Users are responsible for maintaining account security and confidentiality. We collect minimal data necessary for gameplay and user experience. Account progress, scores, and achievements are stored securely. Users may delete their accounts at any time.
            </p>
          </section>

          <section className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-foreground mb-4">5. Rewards & Virtual Items</h2>
            <p className="text-muted-foreground leading-relaxed">
              Budzee may offer virtual rewards, points, and achievements. These have no real-world monetary value and cannot be exchanged for cash. Rewards are for entertainment and motivation purposes only.
            </p>
          </section>

          <section className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-foreground mb-4">6. Prohibited Conduct</h2>
            <div className="text-muted-foreground leading-relaxed space-y-2">
              <p>Users must not:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Use cheats, hacks, or unauthorized third-party software</li>
                <li>Harass, abuse, or harm other players</li>
                <li>Share inappropriate content or language</li>
                <li>Attempt to reverse engineer or modify the application</li>
                <li>Create multiple accounts to gain unfair advantages</li>
              </ul>
            </div>
          </section>

          <section className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-foreground mb-4">7. Privacy & Data Protection</h2>
            <p className="text-muted-foreground leading-relaxed">
              We respect your privacy and handle personal data according to our Privacy Policy. We use data to improve gameplay experience and provide personalized content. Users have control over their data and privacy settings.
            </p>
          </section>

          <section className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-foreground mb-4">8. Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed">
              All content, graphics, sounds, and gameplay mechanics in Budzee are protected by intellectual property rights. Users may not copy, distribute, or create derivative works without permission.
            </p>
          </section>

          <section className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-foreground mb-4">9. Updates & Modifications</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update these Terms at any time. Continued use of Budzee after changes constitutes acceptance. We may also update the application with new features, bug fixes, and improvements.
            </p>
          </section>

          <section className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-foreground mb-4">10. Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              For questions about these Terms or the Budzee application, please contact our support team at support@budzee.com or through the in-app feedback system.
            </p>
          </section>
        </div>

        <div className="mt-12 text-center bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border border-border rounded-2xl p-8">
          <p className="text-muted-foreground mb-4">
            By using Budzee, you confirm that you have read, understood, and agree to these Terms and Conditions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/" 
              className="inline-flex items-center justify-center bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105"
            >
              Return to Home
            </Link>
            <Link 
              to="/privacy" 
              className="inline-flex items-center justify-center border border-border text-foreground hover:bg-card font-medium py-3 px-6 rounded-xl transition-all duration-300"
            >
              View Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}