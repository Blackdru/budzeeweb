import { useState, useEffect } from 'react'
import { Star } from 'lucide-react'
import { FaBrain, FaTrophy, FaGamepad } from 'react-icons/fa'

const reviews = [
  {
    id: 1,
    rating: 5,
    text: "Budzee has completely transformed how I think about memory training. The multiplayer battles are incredibly engaging, and I've noticed a real improvement in my cognitive abilities. The game design is beautiful and intuitive!",
    author: "Sathvik",
    avatar: "SV",
    badge: "Daily Player",
    icon: <FaBrain className="text-primary" />
  },
  {
    id: 2,
    rating: 5,
    text: "As a competitive gamer, I love the strategic depth of Budzee's memory challenges. The real-time multiplayer matches are intense and rewarding. The community is fantastic and very supportive!",
    author: "Prashant Rangam",
    avatar: "PR",
    badge: "Daily Player",
    icon: <FaTrophy className="text-accent" />
  },
  {
    id: 3,
    rating: 5,
    text: "The variety of memory games in Budzee keeps me coming back every day. From pattern matching to sequence recall, each game mode offers unique challenges. Perfect for brain training during commutes!",
    author: "Kumar Jadhav",
    avatar: "KJ",
    badge: "Daily Player",
    icon: <FaGamepad className="text-secondary" />
  },
  {
    id: 4,
    rating: 5,
    text: "I've tried many brain training apps, but Budzee stands out with its smooth gameplay and rewarding progression system. The graphics are stunning and the sound design really enhances the experience.",
    author: "Ankit Patel",
    avatar: "AP",
    badge: "Daily Player",
    icon: <FaBrain className="text-primary" />
  },
  {
    id: 5,
    rating: 5,
    text: "Budzee makes memory training fun and social! Playing with friends adds a competitive element that keeps me motivated. The app runs smoothly and the customer support is excellent.",
    author: "V. Gopal",
    avatar: "VG",
    badge: "Daily Player",
    icon: <FaTrophy className="text-accent" />
  }
]

export default function Reviews() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0)

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => 
        (prevSlide + 1) % (windowWidth >= 768 ? Math.ceil(reviews.length / 2) : reviews.length)
      )
    }, 5000)
    return () => clearInterval(timer)
  }, [windowWidth])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const ReviewCard = ({ review }: { review: typeof reviews[0] }) => (
    <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 h-[380px] flex flex-col justify-between hover:bg-card/70 transition-all duration-300 group">
      {/* Rating and Badge */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-accent text-accent" />
          ))}
        </div>
        <div className="flex items-center gap-2 text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
          {review.icon}
          <span>{review.badge}</span>
        </div>
      </div>
      
      {/* Review Text */}
      <div className="flex-grow mb-4">
        <p className="text-muted-foreground leading-relaxed text-sm">{review.text}</p>
      </div>
      
      {/* Author Info */}
      <div className="flex items-center gap-3 mt-auto">
        <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold">
          {review.avatar}
        </div>
        <div>
          <span className="font-semibold text-foreground">{review.author}</span>
          <div className="flex items-center gap-2 text-secondary text-xs">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
              <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12zm3.36-8.64a.75.75 0 00-1.06 1.06L9.5 11.3 7.7 9.5a.75.75 0 00-1.06 1.06l2.3 2.3a.75.75 0 001.06 0l3.36-3.36z" />
            </svg>
            <span>Verified Player</span>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="w-full bg-gradient-to-br from-background via-card/10 to-background text-foreground py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            PLAYER <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">REVIEWS</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what our community of memory game enthusiasts has to say about their Budzee experience
          </p>
        </div>

        {/* Reviews Carousel */}
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {windowWidth >= 768 ? (
              Array.from({ length: Math.ceil(reviews.length / 2) }).map((_, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    {reviews.slice(index * 2, index * 2 + 2).map((review) => (
                      <ReviewCard key={review.id} review={review} />
                    ))}
                  </div>
                </div>
              ))
            ) : (
              reviews.map((review) => (
                <div key={review.id} className="w-full flex-shrink-0 px-4">
                  <ReviewCard review={review} />
                </div>
              ))
            )}
          </div>
          
          {/* Navigation Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {Array.from({ length: windowWidth >= 768 ? Math.ceil(reviews.length / 2) : reviews.length }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? "bg-primary shadow-lg shadow-primary/50" 
                    : "bg-border hover:bg-muted"
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">4.7/5</div>
            <div className="text-muted-foreground">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary mb-2">28K+</div>
            <div className="text-muted-foreground">Happy Players</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">3L+</div>
            <div className="text-muted-foreground">Daily Payments</div>
          </div>
        </div>
      </div>
    </div>
  )
}