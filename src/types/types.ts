export type Packages = {
  id: number;
  mrp: number;
  name: string;
  description: string;
  imageLink: string | null;
  duration: string;
  place:string;
};

export type DropdownButtonProps = {
    title: string;  
    link: string;
    places?: DropdownButtonProps[];
};

export type FamousPlaces = {
  name: string;
  description: string;
  image: string;
  place: string;
};