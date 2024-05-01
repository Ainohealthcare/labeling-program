import { createBrowserClient } from '@supabase/ssr'

export const createClient = () =>
    createBrowserClient(
        'https://lxziyihbxcoatqaarfur.supabase.co',
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx4eml5aWhieGNvYXRxYWFyZnVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQyODAwNDAsImV4cCI6MjAyOTg1NjA0MH0.I2ZbK3F-c3kxaRczyAx7zVv1xv3YXLJk-nr5CY2W3j4',
    )
