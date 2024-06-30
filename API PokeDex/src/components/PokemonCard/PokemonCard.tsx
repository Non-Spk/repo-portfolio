import React from 'react';
import './PokemonCard.css';
import { Type } from "@/interface/pokemonDetail";
import { Link } from "react-router-dom";


interface PokemonCardProps {
    id: number
    name: string
    imageFront: string
    imageBack: string
    types: Type[]
}


const PokemonCard: React.FC<PokemonCardProps> = ({ id, name, imageFront, imageBack, types }: PokemonCardProps) => {
    return (
        <Link to={`/detail/${name}`}>
            <div className="flip-card bg-gray-800">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <div className="flex justify-between p-[10px]">
                            <p className="title capitalize">{name}</p>
                            <p className='title'>#{id}</p>
                        </div>
                        <img className='img' src={imageFront} alt="imageFront" />
                        <div className='flex gap-2 justify-end'>{types.map((item) => {
                            return (
                                <span
                                    className={`badge-type-${item.type.name}  px-[14px] capitalize py-1 rounded-[16px]`}
                                >
                                    {item.type.name}
                                </span>
                            )
                        })}</div>
                    </div>
                    <div className="flip-card-back">
                        <div className="flex justify-between p-[10px]">
                            <p className="title capitalize">{name}</p>
                            <p className='title'>#{id}</p>
                        </div>
                        <img className='img' src={imageBack} alt="imageBack" />
                        <div className='flex gap-2 justify-end'>{types.map((item) => {
                            return (
                                <span
                                    className={`badge-type-${item.type.name}  px-[14px] capitalize py-1 rounded-[16px]`}
                                >
                                    {item.type.name}
                                </span>
                            )
                        })}</div>
                    </div>
                </div >
            </div >
        </Link>
    );
};

export default PokemonCard;
