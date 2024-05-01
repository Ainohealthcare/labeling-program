import { cookies } from 'next/headers'

import { createClient } from './server'

const cookieStore = cookies()
export const supabase = createClient(cookieStore)
