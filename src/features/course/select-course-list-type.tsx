import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/ui/select';

interface Props {
  setListType: (type: 'GRID' | 'LIST') => void;
}

const SelectCourseListType: FC<Props> = ({ setListType }) => {
  const { t } = useTranslation();

  const handleValueChange = (value: string) => {
    if (value === 'GRID' || value === 'LIST') {
      setListType(value);
    }
  };

  return (
    <Select onValueChange={handleValueChange}>
      <SelectTrigger
        aria-label='select course display variant'
        className='bg-card rounded-xl hidden sm:flex w-[180px]'>
        <SelectValue placeholder={t('home.display.display-mode')} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value='LIST'>{t('home.display.list')}</SelectItem>
          <SelectItem value='GRID'>{t('home.display.grid')}</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectCourseListType;
