import { useQuery } from '@tanstack/react-query';
import { getHeroSubHeading } from './query';


export const useGetHeroSubHeading = () => 

useQuery({
    queryKey: ['getHeroSubHeading'],
    queryFn: getHeroSubHeading
});