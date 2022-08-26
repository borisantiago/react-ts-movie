import { useEffect, useState } from "react";
import { Container, AvatarContainer, Avatar, Degrade } from '../styled.components';
import Blackwidow from "../../assets/black-widow.png"
import { Item, Movie } from "../../interfaces/interfaces";

const Carousel = (): JSX.Element => {

    const [data, setData] = useState<Movie[]>([]);

    const getData = async(): Promise<void> => {
        const url = import.meta.env.VITE_BASE_URL;
        const items = await fetch(url);
        const response = await items.json();
        const aItems = response.data.results.map((item:Item) => {
            const obj: Movie = {
                name: item.name,
                description: item.description,
                thumbnail: `${item.thumbnail.path}.${item.thumbnail.extension}`
            };
            return obj;
        })
        
        console.log(aItems);
        
        setData(aItems);
    } 

    useEffect(() => {
        getData();
       
    }, [] );

    return(
        <>
        {data.length > 0 ?  
        <> 
            <Container height={50} src={data[1].thumbnail}>
                
            </Container>
                <AvatarContainer height={50}>
                    <Avatar height={50} src={Blackwidow}/>        
                </AvatarContainer>
                <Degrade height={50}/>
        </> : <section className="loading">Cargando..</section>
        }
        </>
    );
};

export default Carousel;