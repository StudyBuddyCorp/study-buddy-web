import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/shared/components/ui/accordion"

const SubscribeToCourse = () => {

    return (
        <div className="w-full sm:max-w-lg flex justify-center">
            <Accordion className="w-full bg-card p-8 rounded-md shadow-sm" type="single" collapsible>
                <AccordionItem value="student">
                    <AccordionTrigger>Подписать студента</AccordionTrigger>
                    <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="group">
                    <AccordionTrigger>Подписать группу</AccordionTrigger>
                    <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}

export default SubscribeToCourse;