import { memo } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader } from '@/ui/card';

interface Props {
  id: string;
  title: string;
  description: string;
}

export const CourseCard = memo(({ id, title, description }: Props) => {
  return (
    <Link to={`/course/${id}`}>
      <Card className='hover:scale-[101%] transition-all duration-200 hover:bg-card/50 h-full'>
        <CardHeader>
          <h4>
            {title.substring(0, 15)}
            {title.length > 15 && '...'}
          </h4>
        </CardHeader>
        <CardContent>
          <div>
            {description.substring(0, 30)}
            {description.length > 30 && '...'}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
});