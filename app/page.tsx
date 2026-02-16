import Header from "@/components/header"
import Footer from "@/components/footer"
import HeroSection from "@/components/home/hero-section"
import IntroSection from "@/components/home/intro-section"
import AboutPreviewSection from "@/components/home/about-preview-section"
import CardSection from "@/components/home/card-section"
import ProjectsSection from "@/components/home/projects-section"
import NewsSection from "@/components/home/news-section"

const cards = [
  {
    header: "About Frank Capasso & Sons, Inc",
    descriptor:
      "One focus. Five decades. Proven experience and precision you can trust in masonry and concrete restoration.",
    buttonText: "About Us",
    image: "/card1.png",
    location: "right" as const,
  },
  {
    header: "A Culture Built on Integrity and Craft",
    descriptor:
      "We foster a diverse, professional workplace where people are trained, supported, and given room to grow. Our culture, values, and pride show in what we build and restore.",
    buttonText: "Learn More",
    image: "/card2.png",
    location: "left" as const,
  },
  {
    header: "Our Projects, Our Purpose",
    descriptor:
      "We purpose every project with integrity—protecting what matters and extending the life of existing buildings safely and reliably.",
    buttonText: "View Projects",
    image: "/card3.png",
    location: "right" as const,
  },
]

export default function HomePage() {
  return (
    <main>
      <Header />
      <HeroSection />
      <IntroSection />
      <div className="space-y-3">
        {cards.map((card, index) => (
        <CardSection
          key={index}
          header={card.header}
          descriptor={card.descriptor}
          buttonText={card.buttonText}
          image={card.image}
          location={card.location}
        />
      ))}
      </div>
      <NewsSection />
      <Footer />
    </main>
  )
}
