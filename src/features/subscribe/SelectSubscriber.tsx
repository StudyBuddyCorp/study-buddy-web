import { useAppDispatch, useAppSelector } from "@/shared/store"
import { courseSlice } from "@/shared/store/reducers/SubscribeSlice"
import UserTable from "@/widgets/user/UserTable"
import { HeartCrack } from "lucide-react"
import CourseCard from "../course/CourseCard"
import { Button } from "@/shared/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/shared/components/ui/accordion"

const SelectSubscriber = () => {

    const { course } = useAppSelector(state => state.subscribeReducer)
    const dispatch = useAppDispatch()
    const { setCourse } = courseSlice.actions

    if (course) {
        return (
            <div className="flex flex-col w-full gap-y-4">
                <h4>Вы выбрали:</h4>
                <CourseCard description={course.description} title={course.title} />
                <Button className="flex justify-start" variant='ghost' size='sm' onClick={() => dispatch(setCourse(null))}>Отменить выбор</Button>
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
                            <HeartCrack />
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        )
    }
}

export default SelectSubscriber;