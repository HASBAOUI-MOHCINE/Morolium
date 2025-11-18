import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { coursesData, categories } from '../data/coursesData'
import { useTranslation } from '../i18n/TranslationProvider'

import HTMLFundamentals from '../courses/HTMLFundamentals.jsx'
import CSSMastery from '../courses/CSSMastery.jsx'
import JavaScriptEssentials from '../courses/JavaScriptEssentials.jsx'
import AdvancedJavaScript from '../courses/AdvancedJavaScript.jsx'
import BoxModelAndLayout from '../courses/BoxModelAndLayout.jsx'
import FlexboxMastery from '../courses/FlexboxMastery.jsx'
import CSSGridLayout from '../courses/CSSGridLayout.jsx'
import AnimationsAndTransitions from '../courses/AnimationsAndTransitions.jsx'
import ResponsiveDesign from '../courses/ResponsiveDesign.jsx'
import ReactFundamentals from '../courses/ReactFundamentals.jsx'
import TypeScriptForFrontEnd from '../courses/TypeScriptForFrontEnd.jsx'
import TailwindCSS from '../courses/TailwindCSS.jsx'
import ResponsiveWebDesign from '../courses/ResponsiveWebDesign.jsx'
import GitAndVersionControl from '../courses/GitAndVersionControl.jsx'
import WebPerformanceOptimization from '../courses/WebPerformanceOptimization.jsx'
import WebAccessibility from '../courses/WebAccessibility.jsx'
import VueEssentials from '../courses/VueEssentials.jsx'
import ComingSoon from './ComingSoon.jsx'

export default function Courses() {
	const [selectedCategory, setSelectedCategory] = React.useState('All')
	const { t, language } = useTranslation()
	const isRTL = language === 'ar'

	const filteredCourses =
		selectedCategory === 'All'
			? coursesData
			: coursesData.filter((course) => course.category === selectedCategory)

	return (
		<div className="flex-1 bg-background text-foreground" dir={isRTL ? 'rtl' : 'ltr'}>
			<div className="px-4 py-12">
				<Routes>
					<Route
						index
						element={
							<>
								<header className="mx-auto mb-12 max-w-4xl text-center">
										<p className="mb-3 inline-flex items-center justify-center rounded-full border border-primary/40 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-primary">
											{t.heroTitle}
										</p>
										<h1 className="text-3xl font-bold sm:text-4xl">
											{t.coursesTitle ?? 'Front-End Development Courses'}
										</h1>
										<p className="mt-3 text-muted-foreground">
											{t.coursesLead ?? 'Master essential skills with curated cohorts, gold-standard projects, and clear readiness signals.'}
										</p>
								</header>

								<div className="mx-auto mb-10 flex max-w-4xl flex-wrap justify-center gap-3">
									{categories.map((cat) => {
										const label = t.categoryLabels?.[cat.value] ?? cat.label ?? cat.value
										return (
										<Button
											key={cat.value}
											variant={selectedCategory === cat.value ? 'default' : 'outline'}
											size="sm"
											onClick={() => setSelectedCategory(cat.value)}
											className={
												selectedCategory === cat.value
													? 'bg-primary text-primary-foreground border-transparent shadow-sm'
													: 'border-border bg-card hover:bg-secondary/60'
											}
										>
											{label}
										</Button>
									)})}
								</div>

								<div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
									{filteredCourses.map((course) => {
										const levelLabel = t.levels?.[course.level] ?? course.level
										return (
										<Card
											key={course.id}
											className="group relative flex h-full flex-col overflow-hidden border border-border bg-card/95 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
										>
											<div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-amber-300 to-secondary" />
											<CardHeader className="pb-4">
												<div className="flex items-start justify-between gap-3">
													<CardTitle className="text-lg font-semibold text-foreground">
														{t.courseCopy?.[course.id]?.title ?? course.title}
													</CardTitle>
													<span
														className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium shadow-sm ${
															course.level === 'Beginner'
																? 'bg-secondary text-secondary-foreground border border-secondary-foreground/20'
																: course.level === 'Intermediate'
																? 'bg-primary/15 text-primary border border-primary/30'
																: 'bg-amber-100 text-amber-700 border border-amber-200'
														}`}
													>
														{levelLabel}
													</span>
												</div>
												<p className="mt-2 text-sm text-muted-foreground">
													{t.courseCopy?.[course.id]?.description ?? course.description}
												</p>
											</CardHeader>
											<CardContent className="pt-0">
												<div className="mb-4 flex items-center justify-between text-xs text-muted-foreground">
													<span className="inline-flex items-center gap-1 rounded-full bg-secondary/40 px-2.5 py-1 font-semibold text-secondary-foreground">
														<span className="h-1.5 w-1.5 rounded-full bg-secondary-foreground" />
														{t.categoryLabels?.[course.category] ?? course.category}
													</span>
													<span className="inline-flex items-center gap-1">
														<span className="text-lg">⏱</span>
														{course.duration}
													</span>
												</div>
												<Button asChild className="w-full justify-center bg-primary text-primary-foreground hover:bg-primary/90">
													<Link to="/coming-soon">{t.enrollNow}</Link>
												</Button>
											</CardContent>
										</Card>
										)
									})}
								</div>

								{filteredCourses.length === 0 && (
									<div className="py-12 text-center">
										<p className="text-lg text-muted-foreground">
											{t.noCourses || 'No courses found in this category.'}
										</p>
									</div>
								)}
							</>
						}
					/>
					<Route path="HTMLFundamentals" element={<HTMLFundamentals />} />
					<Route path="CSSMastery" element={<CSSMastery />} />
					<Route path="JavaScriptEssentials" element={<JavaScriptEssentials />} />
					<Route path="AdvancedJavaScript" element={<AdvancedJavaScript />} />
					<Route path="BoxModelAndLayout" element={<BoxModelAndLayout />} />
					<Route path="FlexboxMastery" element={<FlexboxMastery />} />
					<Route path="CSSGridLayout" element={<CSSGridLayout />} />
					<Route path="AnimationsAndTransitions" element={<AnimationsAndTransitions />} />
					<Route path="ResponsiveDesign" element={<ResponsiveDesign />} />
					<Route path="ReactFundamentals" element={<ReactFundamentals />} />
					<Route path="TypeScriptforFront-End" element={<TypeScriptForFrontEnd />} />
					<Route path="TailwindCSS" element={<TailwindCSS />} />
					<Route path="ResponsiveWebDesign" element={<ResponsiveWebDesign />} />
					<Route path="Git-VersionControl" element={<GitAndVersionControl />} />
					<Route path="WebPerformanceOptimization" element={<WebPerformanceOptimization />} />
					<Route path="WebAccessibility-a11y" element={<WebAccessibility />} />
					<Route path="VuejsEssentials" element={<VueEssentials />} />
					<Route path="/coming-soon" element={<ComingSoon />} />
				</Routes>
			</div>
		</div>
	)
}