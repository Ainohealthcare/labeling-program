import { supabase } from '@/ui/utility/supabase/supabase'

export default async function Page() {
    const { data, error } = await supabase.from('labeled_image').select('*')

    console.log(data)

    return <>IMAGES</>
}
