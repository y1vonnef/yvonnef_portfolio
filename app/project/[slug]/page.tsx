"use client"

import { useState, useEffect } from "react"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getProjectBySlug } from "@/lib/projects"
import { PasswordProtection } from "@/components/password-protection"
import type { ProjectSection } from "@/lib/projects"

interface ProjectPageProps {
  params: {
    slug: string
  }
}

function ProjectSectionComponent({ section }: { section: ProjectSection }) {
  const renderContent = () => {
    const imageClassName = section.imageFit === "contain" ? "object-contain" : "object-cover"

    switch (section.type) {
      case "image-grid":
        return (
          <div className="space-y-8">
            <p className="text-lg leading-relaxed text-foreground-secondary" style={{ whiteSpace: "pre-wrap" }}>
              {section.content}
            </p>
            {section.images && (
              <div className="grid md:grid-cols-2 gap-6">
                {section.images.map((image, index) => (
                  <div key={index} className="aspect-[4/3] relative overflow-hidden rounded-lg bg-background-secondary">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${section.title} ${index + 1}`}
                      fill
                      className={imageClassName}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        )

      case "full-width-image":
        return (
          <div className="space-y-8">
            <p className="text-lg leading-relaxed text-foreground-secondary" style={{ whiteSpace: "pre-wrap" }}>
              {section.content}
            </p>
            {section.images && section.images[0] && (
              <div className="aspect-[2/1] relative overflow-hidden rounded-lg bg-background-secondary">
                <Image
                  src={section.images[0] || "/placeholder.svg"}
                  alt={section.title}
                  fill
                  className={imageClassName}
                />
              </div>
            )}
          </div>
        )

      case "two-column":
        return (
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-lg leading-relaxed text-foreground-secondary" style={{ whiteSpace: "pre-wrap" }}>
                {section.content}
              </p>
            </div>
            {section.images && (
              <div className="space-y-6">
                {section.images.map((image, index) => (
                  <div key={index} className="aspect-[3/4] relative overflow-hidden rounded-lg bg-background-secondary">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${section.title} ${index + 1}`}
                      fill
                      className={imageClassName}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        )

      default:
        return (
          <p className="text-lg leading-relaxed text-foreground-secondary" style={{ whiteSpace: "pre-wrap" }}>
            {section.content}
          </p>
        )
    }
  }

  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-medium mb-8 text-foreground">{section.title}</h2>
        {renderContent()}
      </div>
    </section>
  )
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const project = getProjectBySlug(params.slug)

  if (!project) {
    notFound()
  }

  // Check if project requires password protection
  const protectedProjects = ["mobile-texting-assistant", "ai-brand-kit"]
  const requiresPassword = protectedProjects.includes(params.slug)

  useEffect(() => {
    if (requiresPassword) {
      // Check if user is already authenticated for this session
      const authKey = `auth_${params.slug}`
      const isAuth = sessionStorage.getItem(authKey) === "true"
      setIsAuthenticated(isAuth)
    } else {
      setIsAuthenticated(true)
    }
    setIsLoading(false)
  }, [params.slug, requiresPassword])

  const handlePasswordSuccess = () => {
    const authKey = `auth_${params.slug}`
    sessionStorage.setItem(authKey, "true")
    setIsAuthenticated(true)
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-foreground mx-auto"></div>
          <p className="mt-4 text-foreground-secondary">Loading...</p>
        </div>
      </div>
    )
  }

  if (requiresPassword && !isAuthenticated) {
    return <PasswordProtection onSuccess={handlePasswordSuccess} projectTitle={project.title} />
  }

  // Add safety checks for arrays and properties
  const tags = project.tags || []
  const sections = project.sections || []
  const description = project.description || ""

  const heroImageClassName = project.heroImageFit === "contain" ? "object-contain" : "object-cover"

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-background-tertiary">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-lg font-medium text-foreground">
            Yvonne Fang
          </Link>
          <Link href="/">
            <Button variant="ghost" size="sm" className="text-foreground">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Work
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-sm text-foreground-secondary">{project.year}</span>
                {tags.length > 0 && (
                  <div className="flex gap-2">
                    {tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs px-3 py-1 bg-background-tertiary rounded-full text-foreground-secondary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <h1 className="text-5xl font-medium mb-6 leading-tight text-foreground">{project.title}</h1>
              {description && <p className="text-xl text-foreground-secondary leading-relaxed mb-8">{description}</p>}
            </div>

            <div className="aspect-[4/3] relative overflow-hidden rounded-lg bg-background-secondary">
              <Image
                src={project.heroImage || "/placeholder.svg"}
                alt={project.title}
                fill
                className={heroImageClassName}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Sections */}
      {sections.length > 0 && (
        <div className="border-t border-background-tertiary">
          {sections.map((section, index) => (
            <div key={index} className={index % 2 === 1 ? "bg-background-secondary" : ""}>
              <ProjectSectionComponent section={section} />
            </div>
          ))}
        </div>
      )}

      {/* Next Project Navigation */}
      <section className="py-16 border-t border-background-tertiary">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Link href="/">
            <Button variant="ghost" size="lg" className="text-foreground">
              View All Projects
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
