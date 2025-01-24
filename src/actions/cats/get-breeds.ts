
import { catApi } from '../../config/api/catApi';
import { Breed } from '../../domain/entities/breed';
import type { CatAPIResponse } from '../../infrastructure/interfaces/catapi.interfaces';
import { BreedMapper } from '../../infrastructure/mappers/breed.mapper';

export const getBreeds = async ( page: number, limit: number = 10):Promise<Breed[]> => {
    try {
        const url = `/breeds?page=${page * 1}&limit=${limit}`;
        const { data } = await catApi.get<CatAPIResponse>(url);
        const dataArray = Object.values(data);
        const breeds = await Promise.all(dataArray.map(item => BreedMapper.catApiBreedToEntity(item)));
        return breeds;
        
    } catch (error) {
        throw new Error('Error getting breeds');
    }
};