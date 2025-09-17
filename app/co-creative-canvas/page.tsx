"use client"

import Image from "next/image"

export default function CoCreativeCanvasPage() {
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
            <h1 className="text-5xl font-medium mb-4 leading-tight text-gray-900">Co-Creative Canvas</h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="border-t border-gray-200">
        {/* Vision */}
        <section className="py-8">
          <div className="max-w-4xl mx-auto px-6">
            <p className="text-lg leading-relaxed text-gray-700">
              AI image generation can creatively augment, rather than replace human artists, through new UX paradigms
              that don't overly rely on prompt boxes.
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="py-8 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              The Co-Creative Canvas is an AI creativity augmentation tool. It is a probabilistic canvas that allows
              artist control, creative flow state, and craft, taps into emerging real-time AI image generation
              capabilities, and breaks away from conventional prompt-based image generation UI. It helps artists enjoy
              and explore collaboration with AI without having to sacrifice the drawing process they enjoy.
            </p>
            <div className="w-full aspect-[16/9] relative overflow-hidden rounded-lg bg-gray-100 mb-3">
              <Image
                src="https://freight.cargo.site/t/original/i/c398c1afeb43f13e79427722b8bebd5ded276ce27c775bbb78ec9169df1c6761/ezgif-18515558368dcc.gif"
                alt="Co-Creative Canvas main interface demonstration"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-sm text-gray-600">
              The Co-Creative Canvas allows artists to collaborate with AI while maintaining their creative flow and
              drawing process.
            </p>
          </div>
        </section>

        {/* Vary Mode */}
        <section className="py-8">
          <div className="max-w-4xl mx-auto px-6">
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              This feature allows artists access to the possibility space around their current drawing, offered through
              the diffusion model's latent space, accessed via a compass-like UI. Artists can pin any ideas they like as
              references, and modify their drawing. The canvas is no longer blank or static.
            </p>
            <div className="w-full aspect-[16/9] relative overflow-hidden rounded-lg bg-gray-100 mb-3">
              <Image
                src="https://freight.cargo.site/t/original/i/35c4f82cad085b0428742e159651b12436fbcf91c7f027787dfb724c03d67435/ezgif-85324b51859617.gif"
                alt="Vary Mode feature demonstration showing compass-like UI"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-sm text-gray-600">
              Vary Mode provides artists with a compass-like interface to explore the possibility space around their
              current drawing.
            </p>
          </div>
        </section>

        {/* Mix Mode */}
        <section className="py-8 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              Users can drag any subject in their drawing onto another subject and mix the two. The result can be
              rendered directly onto the canvas, or used as a reference.
            </p>
            <div className="w-full aspect-[16/9] relative overflow-hidden rounded-lg bg-gray-100 mb-3">
              <Image
                src="https://freight.cargo.site/t/original/i/de4af7c9fc4bac036247f40067bd5ae3c804094aeb8dd9903c38327314f1e99d/ezgif-3d9d3fcfeb075a.gif"
                alt="Mix Mode feature demonstration showing drag and mix functionality"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-sm text-gray-600">
              Mix Mode allows users to drag and combine different subjects within their drawing for creative
              experimentation.
            </p>
          </div>
        </section>

        {/* Graft Mode */}
        <section className="py-8">
          <div className="max-w-4xl mx-auto px-6">
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              The canvas becomes malleable, and any object on it can be "grafted" onto another object, just like
              grafting two plant species.
            </p>
            <div className="w-full aspect-[16/9] relative overflow-hidden rounded-lg bg-gray-100 mb-3">
              <Image
                src="https://freight.cargo.site/t/original/i/9e1442909a792685a143c7005559fb098315bfcf47f47b66d68459b5a3d24532/ezgif-65ebfdf0cd3fe6.gif"
                alt="Graft Mode feature demonstration showing object grafting functionality"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-sm text-gray-600">
              Graft Mode enables artists to seamlessly merge objects together, creating hybrid forms through AI-assisted
              grafting techniques.
            </p>
          </div>
        </section>

        {/* Stroke Suggest */}
        <section className="py-8 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              Artists can see an endless ambient stream of visual possibilities play out in real time beneath their own
              drawing. A bit similar to an "auto-suggest for brush strokes."
            </p>
            <div className="w-full aspect-[16/9] relative overflow-hidden rounded-lg bg-gray-100 mb-3">
              <Image
                src="https://freight.cargo.site/t/original/i/86c2fe1be5b1682584132d41d2f4ac1fb20b9eb21bf0d515eb060cf54f354f9b/ezgif-608a34ca5e6dc8.gif"
                alt="Stroke Suggest feature demonstration showing real-time visual suggestions"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-sm text-gray-600">
              Stroke Suggest provides real-time visual possibilities that flow beneath the artist's drawing, offering
              continuous inspiration and creative direction.
            </p>
          </div>
        </section>

        {/* Future Vision */}
        <section className="py-8">
          <div className="max-w-4xl mx-auto px-6">
            <p className="text-lg leading-relaxed text-gray-700">
              This project explores new paradigms for human-AI creative collaboration, moving beyond traditional
              prompt-based interfaces to create more intuitive and expressive tools that enhance rather than replace the
              artistic process.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
