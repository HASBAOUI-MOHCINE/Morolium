import React from 'react'
import { useTranslation } from '../i18n/TranslationProvider'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

export default function ComingSoon({ title }) {
  const { t } = useTranslation()

  return (
    <div className="flex-1 px-4 py-16 flex items-center justify-center bg-background text-foreground">
      <Card className="max-w-xl w-full text-center border border-slate-200 bg-card/95 shadow-md dark:border-slate-800">
        <CardHeader>
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100 text-2xl dark:bg-orange-500/15">
            ⏳
          </div>
          <CardTitle className="text-2xl font-semibold">
            {title || 'Coming soon'}
          </CardTitle>
          <CardDescription className="text-base mt-2">
            {t.comingSoon}
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-2 flex flex-col gap-3 items-center">
          <p className="text-sm text-muted-foreground max-w-sm">
            Were polishing this experience. In the meantime, explore our available courses.
          </p>
          <Button
            asChild
            className="mt-2 bg-orange-500 text-white hover:bg-orange-600 dark:bg-orange-500 dark:hover:bg-orange-400"
          >
            <Link to="/courses">Browse courses</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
