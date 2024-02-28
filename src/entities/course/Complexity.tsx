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

    return  <Progress aria-label="complexity" value={progress} />
 
}

export default ComplexityCard;