import { catApi } from '../../config/api/catApi';
import { Breed } from '../../domain/entities/breed';
import { CatAPIResponse } from '../../infrastructure/interfaces/catapi.interfaces';
import { BreedMapper } from '../../infrastructure/mappers/breed.mapper';



export const getBreedById = async (id: number): Promise<Breed> => {

    try {

        const { data } = await catApi.get<CatAPIResponse>(`/breeds/:breed_${id}`);

        const breed = await BreedMapper.catApiBreedToEntity(data);

        return breed;



    } catch (error) {
        throw new Error(`Error getting breed by id: ${id}`);
    }

}