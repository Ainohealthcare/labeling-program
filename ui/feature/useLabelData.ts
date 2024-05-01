'use client'

import { useEffect, useState } from 'react'

import { supabase } from './supabase'

export function useLabelData({ imageId }: { imageId: string }) {
    const [data, setData] = useState<any>(null)
    const [error, setError] = useState<any>(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data, error } = await supabase
                    .from('labeled_image')
                    .select('*')
                    .eq('id', imageId)

                if (error) {
                    setError(error)
                } else {
                    setData(data)
                }
            } catch (error) {
                setError(error)
            }
        }

        fetchData()
    }, [])

    return { data, error }
}

// bloodEtc: null;
// bloodProperty: 0;
// color: "#000000";
// hematochezia: false;
// id: 1;
// image: "https://lxziyihbxcoatqaarfur.supabase.co/storage/v1/object/public/labeled_image/images/1.jpg";
// memo: null;
// mucus: false;
// proteinLump: false;
// status: 1;
// stoolScale: null;
