import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Globe2, Menu, Moon, SunMedium, X, GraduationCap, BookOpen, Target, FileText, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTranslation } from "@/i18n/TranslationProvider"
import { useTheme } from "@/ui/ThemeProvider"
import { cn } from "@/lib/utils"
import { useAuth } from "@/context/AuthContext"
import AvatarDropdown from "@/ui/AvatarDropdown"

const buildNavLinks = (labels) => [
	{ to: "/", label: labels?.[0] ?? "Overview", icon: BookOpen },
	{ to: "/courses", label: labels?.[1] ?? "Courses", icon: GraduationCap },
	{ to: "/tracks", label: labels?.[2] ?? "Tracks", icon: Target },
	{ to: "/exercises", label: labels?.[3] ?? "Exercises", icon: FileText },
	{ to: "/profile", label: labels?.[5] ?? "Profile", icon: User },
]

export default function Navbar() {
	const location = useLocation()
	const { theme, toggleTheme } = useTheme()
	const { t, language, setLanguage } = useTranslation()
	const { user } = useAuth()
	const [mobileOpen, setMobileOpen] = useState(false)
	const [scrolled, setScrolled] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20)
		}
		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	useEffect(() => {
		setMobileOpen(false)
	}, [location.pathname])

	const navLinks = buildNavLinks(t.nav)

	const isActive = (path) =>
		location.pathname === path || location.pathname.startsWith(`${path}/`)

	const isRTL = language === 'ar'

	return (
		<header 
			className={cn(
				"sticky top-0 z-50 w-full transition-all duration-300 ease-out",
				scrolled 
					? "border-b border-border/60 bg-background/90 backdrop-blur-xl supports-[backdrop-filter]:bg-background/80 shadow-lg" 
					: "border-b border-border/30 bg-background/70 backdrop-blur-lg supports-[backdrop-filter]:bg-background/60"
			)}
			dir={isRTL ? 'rtl' : 'ltr'}
		>
			<div className="container">
				<div className={cn(
					"flex h-20 items-center",
					isRTL && "flex-row-reverse"
				)}>
					{/* Logo Section */}
					<div className="flex flex-1 items-center gap-8 lg:gap-12">
						<Link 
							to="/" 
							className="group flex items-center gap-3 transition-all duration-300 hover:scale-105"
						>
							<div className="relative">
								<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary via-amber-400 to-primary shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:brightness-110">
									<span className="text-sm font-bold uppercase tracking-tight text-primary-foreground">
										MO
									</span>
								</div>
								<div className="absolute -inset-1 rounded-lg bg-gradient-to-br from-primary/20 to-amber-400/20 blur-sm transition-all group-hover:blur-md" />
							</div>
							<div className={cn(
								"hidden flex-col leading-tight md:flex",
								isRTL ? "text-right" : "text-left"
							)}>
								<span className="text-xl font-bold tracking-tight text-foreground bg-gradient-to-br from-foreground to-foreground/80 bg-clip-text">
									Morolium
								</span>
								<span className="text-xs font-medium text-muted-foreground">
									{isRTL ? "أكاديمية الواجهات الأمامية الذهبية" : "Gold-standard front-end academy"}
								</span>
							</div>
						</Link>
					</div>

						{/* Desktop Navigation */}
						<nav className="hidden items-center gap-1 xl:flex justify-center">
							{navLinks.map((link) => {
								const Icon = link.icon
								return (
									<Link
										key={link.to}
										to={link.to}
										className={cn(
											"group relative flex items-center gap-2 rounded-lg px-4 py-3 text-sm font-semibold transition-all duration-300",
											isActive(link.to)
												? "text-foreground shadow-sm"
												: "text-muted-foreground hover:bg-secondary/40 hover:text-foreground hover:shadow-md",
											isRTL ? "flex-row-reverse" : "flex-row"
										)}
									>
										<Icon className={cn(
											"h-4 w-4 transition-all duration-300",
											isActive(link.to) 
												? "text-primary scale-110" 
												: "group-hover:scale-110 group-hover:text-primary"
										)} />
										{link.label}
										{isActive(link.to) && (
											<>
												<div className={cn(
													"absolute h-0.5 bg-gradient-to-r from-primary to-amber-400 rounded-full",
													isRTL 
														? "inset-x-3 -bottom-2 bg-gradient-to-l from-amber-400 to-primary" 
														: "inset-x-3 -bottom-2"
												)} />
												<div className="absolute -inset-2 rounded-lg bg-gradient-to-br from-primary/5 to-amber-400/5 -z-10" />
											</>
										)}
									</Link>
								)
							})}
						</nav>

					{/* Right Section - Controls */}
					<div className={cn(
						"flex flex-1 items-center gap-3 justify-end",
						isRTL && "flex-row-reverse"
					)}>
						{/* Auth Buttons (Desktop) */}
						<div className="hidden md:flex items-center gap-2">
							{user ? (
								<AvatarDropdown />
							) : (
								<>
									<Button variant="ghost" asChild>
										<Link to="/login">{t.login || "Login"}</Link>
									</Button>
									<Button asChild>
										<Link to="/register">{t.signup || "Sign Up"}</Link>
									</Button>
								</>
							)}
						</div>

						{/* Mobile Menu Toggle with Enhanced Style */}
						<Button
							variant="ghost"
							size="icon"
							className="group relative rounded-lg xl:hidden transition-all duration-300 hover:scale-105 hover:bg-secondary/50"
							onClick={() => setMobileOpen((prev) => !prev)}
							aria-label="Toggle navigation"
						>
							<div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/10 to-amber-400/10 opacity-0 transition-opacity group-hover:opacity-100" />
							{mobileOpen ? (
								<X className="h-5 w-5 transition-transform duration-300 rotate-90 scale-110" />
							) : (
								<Menu className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
							)}
						</Button>

						{/* Language Selector with Enhanced Style - Now includes Arabic */}
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button 
									variant="ghost" 
									size="icon" 
									aria-label="Switch language"
									className="group relative rounded-lg transition-all duration-300 hover:scale-105 hover:bg-secondary/50"
								>
									<div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/10 to-amber-400/10 opacity-0 transition-opacity group-hover:opacity-100" />
									<Globe2 className="h-5 w-5 transition-transform group-hover:rotate-12" />
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent 
								align={isRTL ? "start" : "end"}
								className="w-44 rounded-lg border-border/40 bg-card/95 backdrop-blur-xl p-2 shadow-xl"
							>
								<DropdownMenuItem
									onClick={() => setLanguage("en")}
									className={cn(
										"cursor-pointer rounded-lg px-3 py-3 transition-all duration-200",
										language === "en" 
											? "bg-gradient-to-r from-primary/15 to-amber-400/15 text-foreground font-semibold border border-primary/20" 
											: "hover:bg-secondary/50"
									)}
								>
									<span className={cn(
										"flex items-center gap-2 w-full",
										isRTL && "flex-row-reverse"
									)}>
										<span className="text-sm">🇺🇸</span>
										English
										{language === "en" && (
											<span className={cn(
												"text-xs text-primary",
												isRTL ? "mr-auto" : "ml-auto"
											)}>✓</span>
										)}
									</span>
								</DropdownMenuItem>
								<DropdownMenuItem
									onClick={() => setLanguage("fr")}
									className={cn(
										"cursor-pointer rounded-lg px-3 py-3 transition-all duration-200",
										language === "fr" 
											? "bg-gradient-to-r from-primary/15 to-amber-400/15 text-foreground font-semibold border border-primary/20" 
											: "hover:bg-secondary/50"
									)}
								>
									<span className={cn(
										"flex items-center gap-2 w-full",
										isRTL && "flex-row-reverse"
									)}>
										<span className="text-sm">🇫🇷</span>
										Français
										{language === "fr" && (
											<span className={cn(
												"text-xs text-primary",
												isRTL ? "mr-auto" : "ml-auto"
											)}>✓</span>
										)}
									</span>
								</DropdownMenuItem>
								<DropdownMenuItem
									onClick={() => setLanguage("ar")}
									className={cn(
										"cursor-pointer rounded-lg px-3 py-3 transition-all duration-200",
										language === "ar" 
											? "bg-gradient-to-r from-primary/15 to-amber-400/15 text-foreground font-semibold border border-primary/20" 
											: "hover:bg-secondary/50"
									)}
								>
									<span className={cn(
										"flex items-center gap-2 w-full",
										isRTL && "flex-row-reverse"
									)}>
										<span className="text-sm">🇸🇦</span>
										العربية
										{language === "ar" && (
											<span className={cn(
												"text-xs text-primary",
												isRTL ? "mr-auto" : "ml-auto"
											)}>✓</span>
										)}
									</span>
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>

						{/* Theme Toggle with Enhanced Style */}
						<Button
							variant="ghost"
							size="icon"
							onClick={toggleTheme}
							aria-label="Toggle theme"
							className="group relative rounded-lg transition-all duration-300 hover:scale-105 hover:bg-secondary/50"
						>
							<div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/10 to-amber-400/10 opacity-0 transition-opacity group-hover:opacity-100" />
							<SunMedium className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
							<Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
							<span className="sr-only">Toggle theme</span>
						</Button>
					</div>
				</div>

				{/* Enhanced Mobile Navigation */}
				{mobileOpen && (
					<div className="border-t border-border/40 bg-background/95 backdrop-blur-xl xl:hidden">
						<div className="container py-6">
							<nav className="grid gap-2">
								{navLinks.map((link) => {
									const Icon = link.icon
									return (
										<Link
											key={link.to}
											to={link.to}
											className={cn(
												"group flex items-center gap-4 rounded-lg px-4 py-4 text-base font-semibold transition-all duration-300",
												isActive(link.to)
													? "bg-gradient-to-r from-primary/10 to-amber-400/10 text-foreground border border-primary/20 shadow-md"
													: "text-muted-foreground hover:bg-secondary/40 hover:text-foreground hover:shadow-sm",
												isRTL ? "flex-row-reverse" : "flex-row"
											)}
											onClick={() => setMobileOpen(false)}
										>
											<div className={cn(
												"flex h-10 w-10 items-center justify-center rounded-lg transition-all duration-300",
												isActive(link.to)
													? "bg-primary text-primary-foreground shadow-md"
													: "bg-secondary/50 group-hover:bg-primary/20 group-hover:text-primary"
											)}>
												<Icon className="h-5 w-5" />
											</div>
											<div className={cn(
												"flex flex-col flex-1",
												isRTL ? "text-right" : "text-left"
											)}>
												<span>{link.label}</span>
												{isActive(link.to) && (
													<span className="text-xs text-primary font-medium mt-1">
														{isRTL ? "الصفحة الحالية" : "Current page"}
													</span>
												)}
											</div>
											{isActive(link.to) && (
												<div className={cn(
													"h-2 w-2 rounded-full bg-gradient-to-r from-primary to-amber-400 animate-pulse",
													isRTL ? "mr-auto" : "ml-auto"
												)} />
											)}
										</Link>
									)
								})}
								
								{/* Mobile Auth Buttons */}
								{!user && (
									<div className="grid gap-2 mt-4 pt-4 border-t border-border/40">
										<Button variant="ghost" asChild className="w-full justify-start" onClick={() => setMobileOpen(false)}>
											<Link to="/login">{t.login || "Login"}</Link>
										</Button>
										<Button asChild className="w-full justify-start" onClick={() => setMobileOpen(false)}>
											<Link to="/register">{t.signup || "Sign Up"}</Link>
										</Button>
									</div>
								)}
							</nav>
							
							{/* Mobile Footer */}
							<div className="mt-6 pt-6 border-t border-border/40">
								<div className={cn(
									"flex items-center justify-between text-sm text-muted-foreground",
									isRTL && "flex-row-reverse"
								)}>
									<span>{isRTL ? "أكاديمية موروليوم" : "Morolium Academy"}</span>
									<span>v2.0</span>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
		</header>
	)
}