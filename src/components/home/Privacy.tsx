import { Link } from "react-router-dom";
import { FaShieldAlt, FaLock, FaEye, FaUserShield, FaDatabase, FaCookie } from "react-icons/fa";

export default function Privacy() {
  return (
    <div className="w-full min-h-screen bg-background text-foreground py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-2xl flex items-center justify-center">
              <FaShieldAlt className="text-3xl text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-accent to-primary">
              Privacy Policy
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information in Budzee.
          </p>
        </div>

        <div className="space-y-8">
          <section className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-secondary/20 rounded-lg flex items-center justify-center">
                <FaDatabase className="text-secondary text-sm" />
              </div>
              <h2 className="text-xl font-semibold text-foreground">1. Information We Collect</h2>
            </div>
            <div className="text-muted-foreground leading-relaxed space-y-3">
              <p><strong>Account Information:</strong> Username, email address, and profile preferences you provide during registration.</p>
              <p><strong>Gameplay Data:</strong> Game scores, progress, achievements, and performance statistics to enhance your experience.</p>
              <p><strong>Device Information:</strong> Device type, operating system, and app version for compatibility and optimization.</p>
              <p><strong>Usage Analytics:</strong> Anonymous data about how you interact with the app to improve features and performance.</p>
            </div>
          </section>

          <section className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                <FaEye className="text-primary text-sm" />
              </div>
              <h2 className="text-xl font-semibold text-foreground">2. How We Use Your Information</h2>
            </div>
            <div className="text-muted-foreground leading-relaxed space-y-2">
              <p>We use your information to:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Provide and improve the Budzee gaming experience</li>
                <li>Save your progress and maintain your achievements</li>
                <li>Enable multiplayer features and matchmaking</li>
                <li>Send important updates and notifications</li>
                <li>Analyze usage patterns to enhance app performance</li>
                <li>Provide customer support and respond to inquiries</li>
              </ul>
            </div>
          </section>

          <section className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center">
                <FaUserShield className="text-accent text-sm" />
              </div>
              <h2 className="text-xl font-semibold text-foreground">3. Information Sharing</h2>
            </div>
            <div className="text-muted-foreground leading-relaxed space-y-3">
              <p><strong>We do not sell your personal information.</strong> We may share limited data only in these circumstances:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>With your explicit consent</li>
                <li>To comply with legal obligations or court orders</li>
                <li>With trusted service providers who help us operate the app (under strict confidentiality)</li>
                <li>Anonymous, aggregated data for research and analytics</li>
              </ul>
            </div>
          </section>

          <section className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-secondary/20 rounded-lg flex items-center justify-center">
                <FaCookie className="text-secondary text-sm" />
              </div>
              <h2 className="text-xl font-semibold text-foreground">4. Data Storage & Cookies</h2>
            </div>
            <div className="text-muted-foreground leading-relaxed space-y-3">
              <p><strong>Local Storage:</strong> Game progress and preferences are stored locally on your device for offline access.</p>
              <p><strong>Cloud Backup:</strong> Optional cloud sync to preserve your progress across devices (with your permission).</p>
              <p><strong>Analytics:</strong> We use anonymous analytics to understand app usage and improve performance.</p>
            </div>
          </section>

          <section className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                <FaLock className="text-primary text-sm" />
              </div>
              <h2 className="text-xl font-semibold text-foreground">5. Data Security</h2>
            </div>
            <div className="text-muted-foreground leading-relaxed space-y-3">
              <p>We implement industry-standard security measures to protect your information:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Encryption of data in transit and at rest</li>
                <li>Secure authentication and access controls</li>
                <li>Regular security audits and updates</li>
                <li>Limited access to personal data by authorized personnel only</li>
              </ul>
            </div>
          </section>

          <section className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-foreground mb-4">6. Your Privacy Rights</h2>
            <div className="text-muted-foreground leading-relaxed space-y-2">
              <p>You have the right to:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li><strong>Access:</strong> Request a copy of your personal data</li>
                <li><strong>Update:</strong> Correct or update your information</li>
                <li><strong>Delete:</strong> Request deletion of your account and data</li>
                <li><strong>Opt-out:</strong> Disable analytics or promotional communications</li>
                <li><strong>Data Portability:</strong> Export your game data</li>
              </ul>
            </div>
          </section>

          <section className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-foreground mb-4">7. Children's Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              Budzee is designed to be family-friendly. For users under 13, we require parental consent and collect minimal information necessary for gameplay. Parents can contact us to review, update, or delete their child's information.
            </p>
          </section>

          <section className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-foreground mb-4">8. International Users</h2>
            <p className="text-muted-foreground leading-relaxed">
              Budzee is available globally. We comply with applicable privacy laws including GDPR, CCPA, and other regional regulations. Data may be processed in different countries while maintaining appropriate safeguards.
            </p>
          </section>

          <section className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-foreground mb-4">9. Policy Updates</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Privacy Policy to reflect changes in our practices or legal requirements. We'll notify users of significant changes through the app or email. Continued use indicates acceptance of the updated policy.
            </p>
          </section>

          <section className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-foreground mb-4">10. Contact Us</h2>
            <div className="text-muted-foreground leading-relaxed space-y-2">
              <p>For privacy-related questions or requests, contact us:</p>
              <ul className="list-none ml-4 space-y-1">
                <li><strong>Email:</strong> privacy@budzee.com</li>
                <li><strong>Support:</strong> Through the in-app feedback system</li>
                <li><strong>Response Time:</strong> We aim to respond within 48 hours</li>
              </ul>
            </div>
          </section>
        </div>

        <div className="mt-12 text-center bg-gradient-to-r from-secondary/10 via-accent/10 to-primary/10 border border-border rounded-2xl p-8">
          <p className="text-muted-foreground mb-4">
            By using Budzee, you acknowledge that you have read and understood this Privacy Policy.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/" 
              className="inline-flex items-center justify-center bg-gradient-to-r from-secondary to-accent hover:from-secondary/90 hover:to-accent/90 text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105"
            >
              Return to Home
            </Link>
            <Link 
              to="/terms" 
              className="inline-flex items-center justify-center border border-border text-foreground hover:bg-card font-medium py-3 px-6 rounded-xl transition-all duration-300"
            >
              View Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}