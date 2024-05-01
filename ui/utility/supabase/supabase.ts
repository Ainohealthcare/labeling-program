'use server'

import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { cookies } from 'next/headers'

export const supabase = () => {
    const cookieStore = cookies()

    return createServerClient(
        'https://lxziyihbxcoatqaarfur.supabase.co',
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx4eml5aWhieGNvYXRxYWFyZnVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQyODAwNDAsImV4cCI6MjAyOTg1NjA0MH0.I2ZbK3F-c3kxaRczyAx7zVv1xv3YXLJk-nr5CY2W3j4',
        {
            cookies: {
                get(name: string) {
                    return cookieStore.get(name)?.value
                },
                set(name: string, value: string, options: CookieOptions) {
                    try {
                        cookieStore.set({ name, value, ...options })
                    } catch (error) {
                        // The `set` method was called from a Server Component.
                        // This can be ignored if you have middleware refreshing
                        // user sessions.
                    }
                },
                remove(name: string, options: CookieOptions) {
                    try {
                        cookieStore.set({ name, value: '', ...options })
                    } catch (error) {
                        // The `delete` method was called from a Server Component.
                        // This can be ignored if you have middleware refreshing
                        // user sessions.
                    }
                },
            },
        },
    )
}
