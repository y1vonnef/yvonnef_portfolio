"use client"

import Image from "next/image"

export default function AIWorldbuildingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation - No back button */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-center">
          <span className="text-lg font-medium text-gray-900">Yvonne Fang</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-8">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-4">
            <h1 className="text-5xl font-medium mb-4 leading-tight text-gray-900">AI-Driven Worldbuilding</h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="border-t border-gray-200">
        {/* Main paragraphs */}
        <section className="py-8">
          <div className="max-w-4xl mx-auto px-6 space-y-4">
            <p className="text-lg leading-relaxed text-gray-700">
              I have been building and tinkering with real-time AI-driven worldbuilding experiences and pipelines,
              exploring how to create worlds that are truly engaging, fun, and meaningful for players and audiences. I
              also empower more creators to create interactive AI narratives and environments that feel expressive,
              emotional, and immersive, rather than generic or unengaging.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              Following my successful personal project, an interactive real-time AI installation that engaged hundreds
              of visitors across multiple exhibitions, I developed a modular tool and workshop to help more creators
              author high-quality interactive AI worlds. Through these workshops, I gained valuable insight into
              creators' perspectives, concerns, and aspirations for AI-powered storytelling, sparking many deep and
              inspiring discussions.
            </p>
          </div>
        </section>

        {/* Installation Image */}
        <section className="py-8 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <div className="w-full aspect-[16/9] relative overflow-hidden rounded-lg bg-gray-100 mb-3">
              <Image
                src="https://freight.cargo.site/t/original/i/6144dff120990b3a4beb6dcea70a157df2266632da2ae4fe8ce166e933678421/installation-view-3.JPG"
                alt="Interactive AI installation exhibition view"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-sm text-gray-600">
              My interactive real-time AI installation engaged hundreds of visitors across multiple exhibitions,
              demonstrating the potential for meaningful human-AI creative collaboration.
            </p>
          </div>
        </section>

        {/* Speaking Image */}
        <section className="py-8">
          <div className="max-w-4xl mx-auto px-6">
            <div className="w-full aspect-[4/3] relative overflow-hidden rounded-lg bg-gray-100 mb-3">
              <Image
                src="https://freight.cargo.site/t/original/i/421e701796f368079e5397d758915dd77e01d51cab97efecd8211cee25779de5/IMG_5765.jpg"
                alt="Speaking at conference about AI worldbuilding"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-sm text-gray-600">
              Sharing insights and experiences about AI-driven creative tools and their impact on storytelling and
              worldbuilding.
            </p>
          </div>
        </section>

        {/* Tool Development */}
        <section className="py-8 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <div className="w-full aspect-[16/9] relative overflow-hidden rounded-lg bg-gray-100 mb-3">
              <Image
                src="https://freight.cargo.site/t/original/i/2f3233e924bab0ccee31f553a77d3a298967777c9e43b2023aa3c365cb1548de/Screenshot2.png"
                alt="Screenshot of AI worldbuilding tool interface"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-sm text-gray-600">
              I developed a modular tool to help creators author high-quality interactive AI worlds, making advanced AI
              storytelling techniques more accessible to a broader creative community.
            </p>
          </div>
        </section>

        {/* Workshop Section */}
        <section className="py-8">
          <div className="max-w-4xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-6 mb-3">
              <div className="w-full aspect-[4/3] relative overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src="https://freight.cargo.site/t/original/i/abcc5a1b14f26c8f808b11ce556802f807380aad77c0aba878213a978a00027b/workshop.png"
                  alt="Workshop presentation screenshot"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="w-full aspect-[4/3] relative overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src="https://freight.cargo.site/t/original/i/81efdaa5ccfc467d9c087a0930f2615623074e4a78a462db68acd4fe7a777c75/workshop.jpg"
                  alt="Workshop participants collaborating"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <p className="text-sm text-gray-600">
              Through hands-on workshops, I gained valuable insight into creators' perspectives, concerns, and
              aspirations for AI-powered storytelling, sparking many deep and inspiring discussions about the future of
              interactive media.
            </p>
          </div>
        </section>

        {/* Worksheet Section */}
        <section className="py-8 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <div className="w-full aspect-[4/3] relative overflow-hidden rounded-lg bg-gray-100 mb-3">
              <Image
                src="https://freight.cargo.site/t/original/i/26d7096a6e21916b614e178b2437a5b418fe14aa0bf1718ad27bdccd46b01a33/Screenshot-2025-08-13-163149.png"
                alt="Creative brainstorming worksheet for AI worldbuilding"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-sm text-gray-600">
              I also made this worksheet to help people brainstorm fun and engaging worlds.
            </p>
          </div>
        </section>

        {/* Final Paragraph */}
        <section className="py-8">
          <div className="max-w-4xl mx-auto px-6">
            <p className="text-lg leading-relaxed text-gray-700">
              I'm excited to keep pushing the possibilities of interactive generative media as new technologies emerge,
              from real-time video generation to even more advanced pipelines for storytelling, character creation, and
              world simulation.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
