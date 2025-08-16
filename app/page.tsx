import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import DotGridShader from "@/components/DotGridShader"

import ProjectCard from "@/components/project-card"
import AnimatedHeading from "@/components/animated-heading"
import RevealOnView from "@/components/reveal-on-view"

export default function Page() {
  const heroImages = [
    {
      src: "/placeholder.svg?height=900&width=1600",
      caption: "Blockchain Development — Solana workspace",
      from: "#0f172a",
      to: "#6d28d9",
    },
    {
      src: "/placeholder.svg?height=900&width=1600",
      caption: "NFT Platform — Digital collectibles marketplace",
      from: "#111827",
      to: "#2563eb",
    },
    {
      src: "/placeholder.svg?height=900&width=1600",
      caption: "Research — Quantum cryptography analysis",
      from: "#0b132b",
      to: "#5bc0be",
    },
  ]

  const projects = [
    {
      title: "Solana Wallet — Crypto wallet application",
      subtitle: "Blockchain development",
      imageSrc:
        "https://guarda.com/assets/images/academy/thumbs/how_to_create_sol_wallet.webp",
      tags: ["Blockchain", "Solana", "Web3"],
      href: "https://solanawallet.dev",
      priority: true,
      gradientFrom: "#0f172a",
      gradientTo: "#6d28d9",
    },
    {
      title: "Research Paper — Quantum & Cryptography",
      subtitle: "Academic research",
      imageSrc: "https://cdn.mos.cms.futurecdn.net/c4HszRdoBKDepwtFVFhrwV.jpg",
      tags: ["Research", "Quantum", "Cryptography"],
      href: "#project-6",
      priority: false,
      gradientFrom: "#0b132b",
      gradientTo: "#10b981",
    },
    {
      title: "NFT Ticketing Platform — Digital collectibles",
      subtitle: "Web3 & smart contracts",
      imageSrc: "https://queue-it.com/media/kamjr1q5/nft-ticket.jpg",
      tags: ["NFT", "Web3", "Smart Contracts"],
      href: "https://rough-nft-ticketing.vercel.app/",
      priority: false,
      gradientFrom: "#111827",
      gradientTo: "#2563eb",
    },
    {
      title: "MIT WPU Rental — Campus rental platform",
      subtitle: "FullStack web application",
      imageSrc: "https://cdn1.booqable.com/marketing-assets/landing-pages/industries/sports-equipment/simple-sports-equipment-rental-software-hero-f5451942daf055194b9a777c727848cac4990f59018fbd4f5c1d10a26189b299f5cc8d4a50d3349210af9eac54de0bb2f258a302f91daf9f87bc108864c272bf.webp",
      tags: ["Rust", "Ethereum", "FullStack"],
      href: "#project-3",
      priority: false,
      gradientFrom: "#0b132b",
      gradientTo: "#5bc0be",
    },
    {
      title: "LTC Development — College management system",
      subtitle: "Educational platform development",
      imageSrc: "https://webcodeft.com/wp-content/uploads/2025/01/Image_2025_01_17t12_44_03_564z.png",
      tags: ["Rust", "Ethereum", "SaaS"],
      href: "#project-4",
      priority: false,
      gradientFrom: "#0f172a",
      gradientTo: "#10b981",
    },
    {
      title: "Web2 Projects — Traditional web apps",
      subtitle: "Frontend & backend solutions",
      imageSrc: "https://www.mindinventory.com/blog/wp-content/uploads/2021/06/expense-tracking-app-features.webp",
      tags: ["Web2", "JavaScript", "UI/UX"],
      href: "/https://track-it-expense-tracker-app.vercel.app/",
      priority: false,
      gradientFrom: "#1f2937",
      gradientTo: "#8b5cf6",
    },
  ]

  return (
    <main className="bg-neutral-950 text-white">
      {/* HERO: full-viewport row. Left is sticky; right scrolls internally. */}
      <section className="px-4 pt-4 pb-16 lg:pb-4">
        <div className="grid h-full grid-cols-1 gap-4 lg:grid-cols-[420px_1fr]">
          {/* LEFT: sticky and full height, no cut off */}
          <aside className="lg:sticky lg:top-4 lg:h-[calc(100svh-2rem)]">
            <RevealOnView
              as="div"
              intensity="hero"
              className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/60 p-6 sm:p-8"
              staggerChildren
            >
              {/* Texture background */}
              <div className="pointer-events-none absolute inset-0 opacity-5 mix-blend-soft-light">
                <DotGridShader />
              </div>
              <div>
                {/* Wordmark */}
                <div className="mb-8 flex items-center gap-2">
                  <div className="text-2xl font-extrabold tracking-tight">Yogesh Khutwad</div>
                  <div className="h-2 w-2 rounded-full bg-white/60" aria-hidden="true" />
                </div>

                <AnimatedHeading
                  className="text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl"
                  lines={["I build blockchain", "& web solutions"]}
                />

                <p className="mt-4 max-w-[42ch] text-lg text-white/70">
                  MSC in Blockchain with expertise in Solana development, NFTs, and full-stack applications. Currently
                  researching quantum technology's impact on cryptography. Freelance intern at Tublian.com with hands-on
                  blockchain development experience.
                </p>

                {/* CTAs */}
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <Button asChild size="lg" className="rounded-full">
                    <Link href="mailto:khutwadyogesh34@gmail.com">
                      Hire me
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>

                <div className="mt-10">
                  <p className="mb-3 text-xs font-semibold tracking-widest text-white/50">TECHNOLOGIES I WORK WITH</p>
                  <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-2xl font-black text-white/25 sm:grid-cols-3">
                    <li>Solana</li>
                    <li>Rust</li>
                    <li>Ethereum</li>
                    <li>Web3</li>
                    <li>Next.js</li>
                  </ul>
                </div>
              </div>
            </RevealOnView>
          </aside>

          {/* RIGHT: simplified, no internal card or horizontal carousel */}
          <div className="space-y-4">
            {projects.map((p, idx) => (
              <ProjectCard
                key={p.title}
                title={p.title}
                subtitle={p.subtitle}
                imageSrc={p.imageSrc}
                tags={p.tags}
                href={p.href}
                priority={p.priority}
                gradientFrom={p.gradientFrom}
                gradientTo={p.gradientTo}
                imageContainerClassName="lg:h-full"
                containerClassName="lg:h-[calc(100svh-2rem)]"
                revealDelay={idx * 0.06}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
