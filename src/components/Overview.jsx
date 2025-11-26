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

const fallbackLearningPath = ['HTML & CSS foundations', 'Modern JavaScript depth', 'Framework mastery & ops']
const fallbackWeeklyFocus = [
  { label: 'Live studio sessions', value: '4 hrs' },
  { label: 'Hands-on labs', value: '6 hrs' },
  { label: 'Portfolio critiques', value: '2 hrs' },
]

export default function Overview() {
  const { t } = useTranslation()

  const features = t.features ?? fallbackFeatures
  const stats = t.stats ?? fallbackStats
  const learningPath = t.learningPath ?? fallbackLearningPath
  const weeklyFocus = t.weeklyFocus ?? fallbackWeeklyFocus

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-10 py-12 md:py-16">
      <section className="relative overflow-hidden rounded-[32px] border border-border bg-gradient-to-br from-primary/10 via-secondary/30 to-background px-6 py-16 shadow-xl md:px-12 md:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6 text-center lg:text-left">
            <span className="inline-flex items-center justify-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              {t.heroSubtitle}
            </span>
            <h1 className="text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
              {t.heroTitle}
            </h1>
            <p className="text-lg text-muted-foreground sm:text-xl lg:max-w-xl">
              {t.heroLead}
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Link 
                to="/courses" 
                className={cn(buttonVariants({ size: "lg" }), "shadow-md")}
              >
                {t.browseCourses}
              </Link>
              <Link 
                to="/tracks" 
                className={cn(buttonVariants({ variant: "secondary", size: "lg" }), "shadow-md")}
              >
                {t.viewTracks}
              </Link>
            </div>
            {/* <div className="grid gap-6 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/40 bg-white/70 px-4 py-5 text-center shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
                  <p className="text-3xl font-semibold text-primary">{stat.value}</p>
                  <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div> */}
          </div>
          <div className="rounded-3xl border border-white/50 bg-white/70 p-6 shadow-lg backdrop-blur dark:border-white/10 dark:bg-white/5">
            <div className="space-y-6">
              <div className="rounded-2xl border border-border/60 bg-background/90 p-5">
                <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                  {t.learningPathTitle ?? 'Learning Path'}
                </p>
                <ul className="mt-4 space-y-3 text-left text-sm font-medium">
                  {learningPath.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-foreground">
                      <span className="h-2 w-2 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-border/60 bg-background/90 p-5">
                <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                  {t.weeklyFocusTitle ?? 'Weekly Focus'}
                </p>
                <div className="mt-4 space-y-4 text-left text-sm">
                  {weeklyFocus.map((focus) => (
                    <div key={focus.label} className="flex items-center justify-between">
                      <span>{focus.label}</span>
                      <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">{focus.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {stats.map((stat) => (
            <Card key={stat.label} className="border border-border bg-card/95 text-center shadow-sm">
              <CardHeader>
                <CardTitle className="text-4xl font-semibold text-primary">{stat.value}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
                  {stat.label}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-14">
        <div className="mb-10 space-y-2 text-center">
          <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
            {t.whyChoose}
          </h2>
          <p className="text-muted-foreground">{t.whyChooseLead ?? 'A studio-inspired program for the next wave of creative engineers.'}</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="border border-border bg-card/95 shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-16">
        <div className="rounded-[28px] border border-border bg-gradient-to-r from-primary/15 via-secondary/30 to-background p-10 text-center shadow-lg">
          <h3 className="text-3xl font-semibold text-foreground">
            {t.ctaTitle ?? 'Ready to build luminous interfaces?'}
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            {t.ctaLead ?? 'Join thousands of creatives learning to design, develop, and deploy stunning experiences with modern tooling.'}
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link 
              to="/courses" 
              className={cn(buttonVariants({ size: "lg" }), "shadow-md")}
            >
              {t.ctaPrimary ?? 'Explore cohorts'}
            </Link>
            <Link 
              to="/coming-soon" 
              className={cn(buttonVariants({ variant: "secondary", size: "lg" }), "shadow-md")}
            >
              {t.ctaSecondary ?? 'Get notified'}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}