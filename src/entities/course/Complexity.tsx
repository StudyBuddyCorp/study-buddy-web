import { useEffect, useState } from "react";
import { Complexity } from ".";
import { Progress } from "@/shared/components/ui/progress";

const ComplexityCard = ({ complexity }: { complexity: Complexity }) => {

    const [progress, setProgress] = useState(0)

    useEffect(() => {        
        switch (complexity) {
            case Complexity.EASY: {
                setProgress(33)
                break;
            }
            case Complexity.MEDIUM: {
                setProgress(66)
                break;
            }
            case Complexity.DIFFICULT: {
                setProgress(95)
                break;
            }
        }
    }, [complexity])

    return (
        <div>
            <label className="text-sm font-light" htmlFor="complexity">Сложность</label>
            <Progress className="mt-1" id="complexity" value={progress} />
        </div>
    )
}

export default ComplexityCard;