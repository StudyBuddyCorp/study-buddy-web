import { Course } from "@/entities/course";
import Card from "@/entities/course/card";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/shared/components/ui/accordion"
import { Button } from "@/shared/components/ui/button";
import CoursesTable from "@/widgets/course/CoursesTable";
import UserTable from "@/widgets/user/UserTable";
import { ArrowDown, HeartCrack } from "lucide-react";
import { useState } from "react";

const SubscribeToCourse = () => {

    const [course, setCourse] = useState<Course | null>(null)

    return (
        <div className="w-full lg:max-w-5xl flex flex-col gap-y-4">
            <div>
                <h2 className="tracking-tight font-bold">Подписать на курс</h2>
                <p>На этой странице можно подписать студента или целую группу на курс</p>
            </div>
            {!course &&
                <>
                    <div className="flex flex-row gap-4 items-center">
                        <h4>1. Выберите курс</h4>
                        <ArrowDown />
                    </div>
                    <CoursesTable setCourse={setCourse} />
                </>
            }
            {course && <>
                <h4>Вы выбрали:</h4>
                <Card description={course.description} title={course.title} />
                <Button className="flex justify-start" variant='ghost' size='sm' onClick={() => setCourse(null)}>Отменить выбор</Button>
                <h4>Кого хотите подписать?</h4>
                <Accordion className="w-full bg-card p-8 rounded-md shadow-sm" type="single" collapsible>
                    <AccordionItem value="student">
                        <AccordionTrigger>Подписать студента</AccordionTrigger>
                        <AccordionContent>
                            <UserTable />
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="group">
                        <AccordionTrigger>Подписать группу</AccordionTrigger>
                        <AccordionContent className="flex justify-center items-center flex-col gap-4 p-4">
                            <h4>Пока что в разработке...</h4>
                            <HeartCrack/>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </>}
        </div>
    )
}

export default SubscribeToCourse;