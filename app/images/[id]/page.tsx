import { ImageLabelingContainer } from '@/ui/feature/ImageLabelingContainer'

interface PageParams {
  id: string
}

const ImageLabelingPage = ( { params }: { params: PageParams }) => {
    return <ImageLabelingContainer imageId={params.id}></ImageLabelingContainer>
}

export default ImageLabelingPage
