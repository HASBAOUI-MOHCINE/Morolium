import { Link } from 'react-router-dom'
import { useTranslation } from '../i18n/TranslationProvider'
import { buttonVariants } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'

const fallbackFeatures = [
  { title: 'Structured Learning', description: 'Follow curated journeys that stack knowledge intentionally.' },
  { title: 'Portfolio Projects', description: 'Craft beautiful interfaces with production-ready briefs.' },
  { title: 'Mentor Guidance', description: 'Stay on track with checkpoints and actionable feedback.' },
  { title: 'Inclusive by Design', description: 'Accessibility-first patterns built into every module.' },
  { title: 'Performance Mindset', description: 'Ship sites that feel instant on any device.' },
  { title: 'Hiring Readiness', description: 'Interview drills and Git workflows baked in.' },
]

const fallbackStats = [
  { label: 'Expert-led lessons', value: '200+' },
  { label: 'Career-focused tracks', value: '12' },
  { label: 'Practice projects', value: '45' },
]

const fallbackLearningPath = ['Foundational Concepts', 'Advanced Specialization', 'Real-world Application']
const fallbackWeeklyFocus = [
  { label: 'Interactive Lessons', value: '5 hrs' },
  { label: 'Practical Projects', value: '8 hrs' },
  { label: 'Community Review', value: '3 hrs' },
]

export default function Overview() {
  const { t } = useTranslation()

  const features = t.features ?? fallbackFeatures
  const stats = t.stats ?? fallbackStats
  const learningPath = t.learningPath ?? fallbackLearningPath
  const weeklyFocus = t.weeklyFocus ?? fallbackWeeklyFocus

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-10 py-12 md:py-16">
      <section className="relative overflow-hidden rounded-3xl border border-border/50 bg-gradient-to-br from-background via-primary/5 to-secondary/10 px-6 py-20 shadow-2xl md:px-12 md:py-24">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        <div className="relative grid items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center justify-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm">
              {t.heroSubtitle}
            </div>
            <h1 className="text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              {t.heroTitle}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed lg:max-w-2xl">
              {t.heroLead}
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start pt-4">
              <Link 
                to="/courses" 
                className={cn(buttonVariants({ size: "lg" }), "rounded-full px-8 text-lg shadow-lg hover:shadow-primary/25 transition-all duration-300")}
              >
                {t.browseCourses}
              </Link>
              <Link 
                to="/tracks" 
                className={cn(buttonVariants({ variant: "outline", size: "lg" }), "rounded-full px-8 text-lg border-2 hover:bg-secondary/50 transition-all duration-300")}
              >
                {t.viewTracks}
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl opacity-50"></div>
            <div className="relative rounded-2xl border border-border/50 bg-card/50 p-8 shadow-xl backdrop-blur-md">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">
                      {t.learningPathTitle ?? 'Your Journey'}
                    </h3>
                    <ul className="space-y-4">
                      {learningPath.map((item, i) => (
                        <li key={item} className="flex items-center gap-3 text-foreground group">
                          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                            {i + 1}
                          </span>
                          <span className="font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-6 border-t border-border/50">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">
                      {t.weeklyFocusTitle ?? 'Weekly Focus'}
                    </h3>
                    <div className="grid gap-3">
                      {weeklyFocus.map((focus) => (
                        <div key={focus.label} className="flex items-center justify-between p-3 rounded-lg bg-background/50 border border-border/50">
                          <span className="text-sm font-medium">{focus.label}</span>
                          <span className="rounded-md bg-secondary px-2.5 py-0.5 text-xs font-bold text-secondary-foreground">
                            {focus.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {stats.map((stat) => (
            <Card key={stat.label} className="border border-border/50 bg-card/50 text-center shadow-lg backdrop-blur-sm hover:border-primary/20 transition-colors">
              <CardHeader>
                <CardTitle className="text-5xl font-bold text-primary tracking-tight">{stat.value}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                  {stat.label}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="mb-12 space-y-4 text-center">
          <h2 className="text-4xl font-bold text-foreground tracking-tight">
            {t.whyChoose}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t.whyChooseLead ?? 'A studio-inspired program for the next wave of creative engineers.'}</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="border border-border/50 bg-card/50 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-bold mb-2">{feature.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="relative overflow-hidden rounded-3xl border border-border/50 bg-gradient-to-r from-primary/10 via-secondary/20 to-background p-12 text-center shadow-2xl">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
          <div className="relative z-10">
            <h3 className="text-4xl font-bold text-foreground mb-6">
                {t.ctaTitle ?? 'Ready to build luminous interfaces?'}
            </h3>
            <p className="mx-auto mb-10 max-w-2xl text-xl text-muted-foreground">
                {t.ctaLead ?? 'Join thousands of creatives learning to design, develop, and deploy stunning experiences with modern tooling.'}
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Link 
                to="/courses" 
                className={cn(buttonVariants({ size: "lg" }), "rounded-full px-10 py-6 text-lg shadow-lg hover:shadow-primary/25 transition-all duration-300")}
                >
                {t.ctaPrimary ?? 'Explore cohorts'}
                </Link>
                <Link 
                to="/coming-soon" 
                className={cn(buttonVariants({ variant: "outline", size: "lg" }), "rounded-full px-10 py-6 text-lg border-2 hover:bg-secondary/50 transition-all duration-300")}
                >
                {t.ctaSecondary ?? 'Get notified'}
                </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}