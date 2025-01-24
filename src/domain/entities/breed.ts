
export interface Breed {
    weight:             Weight;
    id:                 string;
    name:               string;
    temperament:        string;
    origin:             string;
    description:        string;
    life_span:          string;
    adaptability:       number;
    affection_level:    number;
    child_friendly:     number;
    dog_friendly:       number;
    energy_level:       number;
    grooming:           number;
    health_issues:      number;
    intelligence:       number;
    social_needs:       number;
    stranger_friendly:  number;
    wikipedia_url:      string;
    reference_image_id: string;
    image:              Image;
}

export interface Image {
    id:     string;
    width:  number;
    height: number;
    url:    string;
}

export interface Weight {
    imperial: string;
    metric:   string;
}
