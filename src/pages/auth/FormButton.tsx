import { Button } from "@/shared/components/ui/button";

interface Props {state: 'LOGIN' | "REGISTER"}

const FormButton = ({state}:Props) => {

    const label = state === 'LOGIN' ? "Войти" : "Продолжить"

    return (
        <Button>
            {label}
        </Button>
    )
}

export default FormButton;