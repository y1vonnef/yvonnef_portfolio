"use client"

import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Portfolio() {
  const projects = [
    {
      title: "Mobile Texting Assistant",
      description: "",
      image: "https://freight.cargo.site/t/original/i/a72a393b1741e467acfdbe2505aa4c8443bf085d9c2bde41b8ec053c23ccebbb/4c72c3eb-d31b-4949-9813-c8f5a6ce096e.png",
      tags: ["AI", "LLM","Product"],
      year: "2024",
      slug: "mobile-texting-assistant",
    },
    {
      title: "AI Brand Kit",
      description: "",
      image: "https://freight.cargo.site/t/original/i/c76673857dd5efefd73accbf6becce9a15b39448fcfe3a9f35591795c224cf40/24e636ab4d3b1e30e5d4354f1c4859e-1-1.png",
      tags: ["AI","Product","Design","Prototyping"],
      year: "2023",
      slug: "ai-brand-kit",
    },
    {
      title: "Co-Creative Canvas",
      description: "",
      image: "https://freight.cargo.site/t/original/i/4d548a8b9ae1b417152e2a34c3eecf4ee0369bd29f0baf5b0cbca84e1a92ed3d/ezgif-183a6a02c66ddc.gif",
      tags: ["AI","Product","Design","Prototyping"],
      year: "2025",
      slug: "co-creative-canvas",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-lg font-medium">
            Yvonne Fang
          </Link>
        </div>
      </nav>

      {/* Work Section */}
      <section id="work" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-20">
            {projects.map((project, index) => (
              <Link href={`/project/${project.slug}`} key={index}>
                <Card className="border-0 shadow-none group cursor-pointer">
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                      <div className={`${index % 2 === 1 ? "md:order-2" : ""}`}>
                        <div className="aspect-[3/2] relative overflow-hidden rounded-lg bg-gray-50">
                          <Image
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                        </div>
                      </div>
                      <div className={`${index % 2 === 1 ? "md:order-1" : ""}`}>
                        <div className="flex items-center gap-3 mb-4">
                          <span className="text-sm text-gray-400">{project.year}</span>
                          <div className="flex gap-2">
                            {project.tags.map((tag, tagIndex) => (
                              <span key={tagIndex} className="text-xs px-3 py-1 bg-gray-100 rounded-full text-gray-600">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        <h3 className="text-2xl font-medium mb-4 group-hover:text-gray-600 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-6">{project.description}</p>
                        <Button variant="ghost" className="p-0 h-auto font-normal group-hover:gap-2 transition-all">
                          View Project
                          <ArrowUpRight className="w-4 h-4 ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
