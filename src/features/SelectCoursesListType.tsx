import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/shared/components/ui/select";
import { FC } from "react";

interface Props {
    setListType: (type: 'GRID' | 'LIST') => void
}

const SelectCourseListType:FC<Props> = ({setListType}) => {

    return (
        <Select>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Отображение" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Тип отображения</SelectLabel>
                    <SelectItem onSelect={() => setListType('LIST')} value="LIST">Список</SelectItem>
                    <SelectItem onSelect={() => setListType('GRID')} value="GRID">Сетка</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}

export default SelectCourseListType;