import { Button } from './button'
import { Loader2 } from 'lucide-react'

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    asChild?: boolean
}
export default function SpinnerButton(props: ButtonProps) {
    return (
        <Button className='flex w-full justify-center gap-x-4 items-center' {...props}>{props.disabled && <Loader2 className='animate-spin' />} {props.children}</Button>
    )
}
