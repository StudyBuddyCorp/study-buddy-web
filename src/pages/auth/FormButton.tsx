import { Button } from "@/shared/components/ui/button";

interface Props {state: 'LOGIN' | "REGISTER"}

const FormButton = ({state}:Props) => {

    const label = state === 'LOGIN' ? "Войти" : "Создать аккаунт"

    return (
        <Button>
            {label}
        </Button>
    )
}

export default FormButton;