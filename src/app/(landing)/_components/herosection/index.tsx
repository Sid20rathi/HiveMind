"use client"
import BackdropGradient from "@/components/global/backdrop-gradient"
import GradientText from "@/components/global/gradient-text"
import { Card } from "@/components/ui/card"
import { ChevronDown } from "lucide-react"

import { useState } from "react"
import { PricingSection } from "../pricing"

const howItWorks = [
  {
    step: "Create Your Hivemind",
    description:
      "Sign up and start creating groups around your interests, projects, or communities.",
  },
  {
    step: "Invite & Connect",
    description:
      "Invite members, set permissions, and start collaborating in a secure, intuitive environment.",
  },
  {
    step: "Collaborate Intelligently",
    description:
      "Utilize advanced communication tools, share resources, and track group progress.",
  },
]

const faqs = [
  {
    question:
      "What makes Hivemind different from other communication platforms?",
    answer:
      "Hivemind goes beyond traditional messaging by providing intelligent group collaboration, context-aware recommendations, and robust privacy controls.",
  },
  {
    question: "Can I use Hivemind for both personal and professional groups?",
    answer:
      "Yes! Hivemind is designed to be versatile, supporting everything from hobby groups to professional networks and team collaborations.",
  },
  {
    question: "How much does Hivemind cost?",
    answer:
      "We offer a free tier with basic features, and affordable pro and enterprise plans to suit different needs and group sizes.",
  },
]

const HeroSection = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null)
  return (
    <div>
      <div className="text-center">
        <GradientText
          className="text-[35px] md:text-[40px] lg:text-[55px] xl:text-[70px] 2xl:text-[80px] leading-tight font-semibold"
          element="H1"
        >
          How Hivemind
          <br className="md:hidden" /> Works
        </GradientText>
      </div>
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {howItWorks.map((step, index) => (
              <BackdropGradient
                key={index} // Fixed "key" prop issue
                className="w-8/12 h-full opacity-45 flex flex-col items-center"
              >
                <Card className="p-7 mt-10 md:w-auto w-full bg-themeBlack border-themeGray">
                  <div className="p-6 rounded-xl text-center">
                    <div className="text-6xl font-bold text-purple-300 mb-4">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-300">
                      {step.step}
                    </h3>
                    <p className="text-gray-500">{step.description}</p>
                  </div>
                </Card>
              </BackdropGradient>
            ))}
          </div>
        </div>
      </div>
      <PricingSection />
      <div className="py-16 mt-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            <GradientText className="text-[35px] md:text-[40px] lg:text-[55px] xl:text-[70px] 2xl:text-[80px] leading-tight font-semibold">
              Frequently Asked Questions
            </GradientText>
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="rounded-xl shadow-md">
                <button
                  onClick={() =>
                    setActiveAccordion(activeAccordion === index ? null : index)
                  }
                  className="w-full flex justify-between items-center p-6 text-left"
                >
                  <span className="text-lg font-semibold text-gray-200">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`transform transition-transform ${
                      activeAccordion === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeAccordion === index && (
                  <div className="p-6 pt-0 text-gray-400">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-12 pt-6 border-t w-full border-gray-800 text-center text-gray-500">
        © 2024 Hivemind Technologies. All rights reserved.
        <div className="mt-2 space-x-4">
          <a href="#" className="hover:text-white">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white">
            Terms of Service
          </a>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
