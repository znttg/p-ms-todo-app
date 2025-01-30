'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useToast } from "@/hooks/use-toast";

export function AuthForm() {
    const { toast } = useToast()
    const form = useForm()

    const handleSubmit = form.handleSubmit(async (data) => {
        try {
            await signIn('email', { email: data.email, redirect: false })
            toast({
                title: 'Magic link sent to your email',
                description: 'Please check your email for the magic link'
            })
        } catch (error) {
            toast({
                title: 'Something went wrong',
                description: 'Please try again later'
            })
        }
    })
    
    return (
        <div className="mx-auto max-w-sm space-y-8">
            <div className="space-y-2 text-center">
                <h1 className="text-3xl font-bold">Login</h1>
                <p className="text-gray-500 dark:text-gray-400">Enter your email below to login to your account</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>    
                    <Input id="email" placeholder="m@example.com" required type="email" {...form.register('email')} />
                </div>
                <Button className="w-full" type="submit">
                    Send Magic Link
                </Button>
            </form>
        </div>
    )
}