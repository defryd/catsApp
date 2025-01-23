import { catApi } from '../../config/api/catApi';
import { Breed } from '../../domain/entities/breed';
import { CatAPIResponse } from '../../infrastructure/interfaces/catapi.interfaces';
import { BreedMapper } from '../../infrastructure/mappers/breed.mapper';



export const getBreedByName = async (query: string): Promise<Breed[]> => {

    try {
        const url = `/breeds/search?name=${query}`;
        const { data } = await catApi.get<CatAPIResponse>(url);
        const dataArray = Object.values(data);
        const breeds = await Promise.all(dataArray.map(item => BreedMapper.catApiBreedToEntity(item)));
        return breeds;
    } catch (error) {
        throw new Error(`Error getting breeds by id: ${query}`);
    }

}