'use client'

import styled from '@emotion/styled'
import { ReactNode } from 'react'

import { UIConst } from '@/ui/utility/UIConst'
interface Props {
  children?: ReactNode
}

export const Layout = (props: Props) => {
    return <Container>
        {props.children}
    </Container>
}

const Container = styled.div(({ minHeight }: { minHeight?: number }) => ({
    maxWidth: UIConst.containerSize.width,
    marginLeft: 'auto',
    marginRight: 'auto',
    minHeight: minHeight ?? '100vh',
    backgroundColor: 'white',
}))
