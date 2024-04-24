import { Button } from './button'
import { Loader2 } from 'lucide-react'

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    asChild?: boolean
}
export const SpinnerButton = (props: ButtonProps) => {
    return (
        <Button size='lg' className='flex w-full justify-center gap-x-4 items-center' {...props}>{props.disabled && <Loader2 className='animate-spin' />} {props.children}</Button>
    )
}
