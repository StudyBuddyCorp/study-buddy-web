import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/shared/components/ui/select";
import { FC } from "react";

interface Props {
    setListType: (type: 'GRID' | 'LIST') => void
}

const SelectCourseListType: FC<Props> = ({ setListType }) => {

    const handleValueChange = (value: string) => {
        if (value === 'GRID' || value === 'LIST') {
            setListType(value)
        }
    }

    return (
        <Select onValueChange={handleValueChange}>
            <SelectTrigger aria-label="select course display variant" className="w-[180px]">
                <SelectValue placeholder="Отображение" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Тип отображения</SelectLabel>
                    <SelectItem value="LIST">Список</SelectItem>
                    <SelectItem value="GRID">Сетка</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}

export default SelectCourseListType;