import CoursesTable from "@/widgets/course/course-table/component";

const SelectCourse = () => {

    return (
        <div className="w-full flex flex-col gap-y-4">
            <h4>1. Выберите курс</h4>
            <CoursesTable />
        </div>
    )
}

export default SelectCourse;