import type { Breed } from '../../domain/entities/breed';
import type { CatAPIResponse } from '../interfaces/catapi.interfaces';

export class BreedMapper {
    static async catApiBreedToEntity(data: CatAPIResponse): Promise<Breed> {
        return {
            id: data.id,
            name: data.name,
            temperament: data.temperament,
            origin: data.origin,
            description: data.description,
            life_span: data.life_span,
            adaptability: data.adaptability,
            affection_level: data.affection_level,
            child_friendly: data.child_friendly,
            dog_friendly: data.dog_friendly,
            energy_level: data.energy_level,
            grooming: data.grooming,
            health_issues: data.health_issues,
            intelligence: data.intelligence,
            social_needs: data.social_needs,
            stranger_friendly: data.stranger_friendly,
            wikipedia_url: data.wikipedia_url,
            reference_image_id: data.reference_image_id,
            image: data.image,
            weight: data.weight,
        };
    }
}
