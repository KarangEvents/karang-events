"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Eye, EyeOff, Check, X } from "lucide-react"
import { cn } from "@/lib/utils"

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [email, setEmail] = useState("")
  const [fullName, setFullName] = useState("")
  const [role, setRole] = useState("")
  const [passwordStrength, setPasswordStrength] = useState(0)
  const [formErrors, setFormErrors] = useState<{
    email?: string
    password?: string
    confirmPassword?: string
    fullName?: string
    role?: string
  }>({})

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value
    setPassword(newPassword)

    // Calculate password strength
    let strength = 0
    if (newPassword.length > 6) strength += 1
    if (newPassword.match(/[A-Z]/)) strength += 1
    if (newPassword.match(/[0-9]/)) strength += 1
    if (newPassword.match(/[^A-Za-z0-9]/)) strength += 1

    setPasswordStrength(strength)

    // Validate password
    if (newPassword.length < 6) {
      setFormErrors((prev) => ({ ...prev, password: "Password must be at least 6 characters" }))
    } else {
      setFormErrors((prev) => ({ ...prev, password: undefined }))
    }

    // Check if confirm password matches
    if (confirmPassword && newPassword !== confirmPassword) {
      setFormErrors((prev) => ({ ...prev, confirmPassword: "Passwords do not match" }))
    } else if (confirmPassword) {
      setFormErrors((prev) => ({ ...prev, confirmPassword: undefined }))
    }
  }

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newConfirmPassword = e.target.value
    setConfirmPassword(newConfirmPassword)

    // Check if passwords match
    if (password !== newConfirmPassword) {
      setFormErrors((prev) => ({ ...prev, confirmPassword: "Passwords do not match" }))
    } else {
      setFormErrors((prev) => ({ ...prev, confirmPassword: undefined }))
    }
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value
    setEmail(newEmail)

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(newEmail) && newEmail) {
      setFormErrors((prev) => ({ ...prev, email: "Please enter a valid email address" }))
    } else {
      setFormErrors((prev) => ({ ...prev, email: undefined }))
    }
  }

  const handleFullNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFullName = e.target.value
    setFullName(newFullName)

    if (!newFullName) {
      setFormErrors((prev) => ({ ...prev, fullName: "Full name is required" }))
    } else {
      setFormErrors((prev) => ({ ...prev, fullName: undefined }))
    }
  }

  const handleRoleChange = (value: string) => {
    setRole(value)
    setFormErrors((prev) => ({ ...prev, role: undefined }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate form
    const errors: typeof formErrors = {}

    if (!fullName) errors.fullName = "Full name is required"
    if (!email) errors.email = "Email is required"
    if (!password) errors.password = "Password is required"
    if (!confirmPassword) errors.confirmPassword = "Please confirm your password"
    if (password !== confirmPassword) errors.confirmPassword = "Passwords do not match"
    if (!role) errors.role = "Please select a role"

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors)
      return
    }

    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsLoading(false)

    // Redirect to success page or dashboard in a real app
    alert("Account created successfully!")
  }

  return (
    <div className="flex min-h-[calc(100vh-4rem)] bg-gradient-to-b from-purple-light/20 to-white">
      <div className="flex flex-1 items-center justify-center p-4">
        <Card className="w-full max-w-md shadow-lg animate-fade-in">
          <CardHeader className="space-y-1">
            <CardTitle className="text-3xl font-serif">Create an Account</CardTitle>
            <CardDescription>Enter your information to get started</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  placeholder="John Doe"
                  value={fullName}
                  onChange={handleFullNameChange}
                  className={cn(
                    "transition-all duration-200",
                    formErrors.fullName ? "border-red-500 focus-visible:ring-red-500" : "focus-visible:ring-purple",
                  )}
                  required
                />
                {formErrors.fullName && (
                  <p className="text-xs text-red-500 mt-1 flex items-center">
                    <X className="h-3 w-3 mr-1" /> {formErrors.fullName}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={handleEmailChange}
                  className={cn(
                    "transition-all duration-200",
                    formErrors.email ? "border-red-500 focus-visible:ring-red-500" : "focus-visible:ring-purple",
                  )}
                  required
                />
                {formErrors.email && (
                  <p className="text-xs text-red-500 mt-1 flex items-center">
                    <X className="h-3 w-3 mr-1" /> {formErrors.email}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={password}
                    onChange={handlePasswordChange}
                    className={cn(
                      "transition-all duration-200",
                      formErrors.password ? "border-red-500 focus-visible:ring-red-500" : "focus-visible:ring-purple",
                    )}
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
                {formErrors.password && (
                  <p className="text-xs text-red-500 mt-1 flex items-center">
                    <X className="h-3 w-3 mr-1" /> {formErrors.password}
                  </p>
                )}

                {/* Password strength indicator */}
                {password && (
                  <div className="mt-2">
                    <div className="flex h-1.5 w-full overflow-hidden rounded-full bg-gray-200">
                      <div
                        className={`h-full transition-all duration-300 ${
                          passwordStrength === 0
                            ? "w-1/4 bg-red-500"
                            : passwordStrength === 1
                              ? "w-2/4 bg-orange-500"
                              : passwordStrength === 2
                                ? "w-3/4 bg-yellow-500"
                                : "w-full bg-green-500"
                        }`}
                      />
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {passwordStrength === 0 && "Weak - Use at least 6 characters"}
                      {passwordStrength === 1 && "Fair - Add uppercase letters"}
                      {passwordStrength === 2 && "Good - Add numbers"}
                      {passwordStrength === 3 && "Strong - Add special characters"}
                      {passwordStrength === 4 && "Very strong password"}
                    </p>
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    className={cn(
                      "transition-all duration-200",
                      formErrors.confirmPassword
                        ? "border-red-500 focus-visible:ring-red-500"
                        : "focus-visible:ring-purple",
                    )}
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                  >
                    {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
                {formErrors.confirmPassword && (
                  <p className="text-xs text-red-500 mt-1 flex items-center">
                    <X className="h-3 w-3 mr-1" /> {formErrors.confirmPassword}
                  </p>
                )}
                {confirmPassword && password === confirmPassword && !formErrors.confirmPassword && (
                  <p className="text-xs text-green-500 mt-1 flex items-center">
                    <Check className="h-3 w-3 mr-1" /> Passwords match
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="role">I am a</Label>
                <Select value={role} onValueChange={handleRoleChange}>
                  <SelectTrigger
                    id="role"
                    className={cn(
                      "transition-all duration-200",
                      formErrors.role ? "border-red-500 focus-visible:ring-red-500" : "focus-visible:ring-purple",
                    )}
                  >
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="user">User (Looking for events)</SelectItem>
                    <SelectItem value="vendor">Vendor (Providing event services)</SelectItem>
                    <SelectItem value="organization">Organization (Corporate or institution)</SelectItem>
                  </SelectContent>
                </Select>
                {formErrors.role && (
                  <p className="text-xs text-red-500 mt-1 flex items-center">
                    <X className="h-3 w-3 mr-1" /> {formErrors.role}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                className="w-full bg-purple hover:bg-purple-dark transition-all duration-200 hover:shadow-md"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Creating Account...
                  </>
                ) : (
                  "Create Account"
                )}
              </Button>
            </form>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-2 text-muted-foreground">Or continue with</span>
              </div>
            </div>

            <Button
              variant="outline"
              className="w-full hover:bg-muted/50 transition-all duration-200"
              onClick={() => {}}
            >
              <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Sign up with Google
            </Button>
          </CardContent>
          <CardFooter className="flex justify-center">
            <p className="text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link href="/login" className="text-purple hover:underline transition-all duration-200">
                Log in
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>

      {/* Right side illustration - hidden on mobile */}
      <div className="hidden lg:flex flex-1 bg-purple-light/30 items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=800')] bg-center bg-no-repeat opacity-10"></div>
        <div className="relative z-10 max-w-md p-8 text-center">
          <div className="mb-6">
            <Image
              src="/placeholder.svg?height=300&width=300"
              alt="Event celebration illustration"
              width={300}
              height={300}
              className="mx-auto"
            />
          </div>
          <h2 className="font-serif text-3xl font-bold text-midnight-dark mb-4">Join Karang Events</h2>
          <p className="text-muted-foreground">
            Create an account to discover and book premium events, or showcase your event services to potential clients.
            Our platform connects event organizers with customers seeking memorable experiences.
          </p>
          <div className="mt-8 space-y-4">
            <div className="flex items-center">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple/20 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-purple"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-midnight-dark">Verified Vendors</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple/20 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-purple"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-midnight-dark">Seamless Booking</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple/20 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-purple"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-midnight-dark">Premium Experiences</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
