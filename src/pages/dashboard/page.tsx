// import SelectCourseListType from "@/features/SelectCoursesListType";
// import { useState } from "react";


const DashboardPage = () => {

    // const [listType, setListType] = useState<'GRID' | 'LIST'>('LIST')


    return (
        <div className="w-full md:max-w-3xl mx-auto flex flex-col gap-y-4 mt-4 p-2 sm:p-0">
            <h3>Курсы</h3>
            {/* <SelectCourseListType setListType={setListType} /> */}
            {/* {listType === 'LIST' ? <CourseList courses={courses} /> : <CourseGrid courses={courses} />} */}
        </div>
    )
}

export default DashboardPage;