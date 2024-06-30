import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { pokemonDetailServices } from "@/services";
import { IPokemonDetailResponse } from "@/interface/pokemonDetail";
import "./script.css"

type PokemonType = {
    data: IPokemonDetailResponse | undefined;
    loading: boolean;
    error: null | any;
};

const DetailPage = () => {
    const { name } = useParams();

    const [pokemon, setPokemon] = useState<PokemonType>({
        data: undefined,
        loading: true,
        error: null,
    });

    const [imageMode, setImageMode] = useState<number>(1); // Default to imageFront

    const callData = async (name: string) => {
        const response = await pokemonDetailServices.getPokemonDetail(name);
        if (response.status === 200) {
            if (response.data)
                setPokemon({
                    data: {
                        ...response.data,
                        imageFront:
                            response.data.sprites.other["official-artwork"].front_default ||
                            response.data.sprites.other.dream_world.front_default,
                        imageBack:
                            response.data.sprites.other["official-artwork"].front_shiny ||
                            response.data.sprites.other.dream_world.front_female,
                    },
                    loading: false,
                    error: null,
                });
        } else {
            setPokemon({
                data: undefined,
                loading: false,
                error: response.error,
            });
        }
    };

    useEffect(() => {
        if (name) callData(name);
    }, [name]);

    const handleImageToggle = () => {
        setImageMode((prevMode) => (prevMode === 1 ? 2 : 1));
    };

    return (
        <div className="w-[90%] m-[auto] max-w-[1100px] ">
            <div className="flex justify-center">
                <img src="/images/pokedex-3d-logo.png" alt="logo" className="max-h-[80px]" />
            </div>

            <div className="w-[90%] max-w-[600px] m-[auto] mt-[25px]">
                <div className="flex justify-between">
                    <Link to={"/"} className="bg-[#4CAFEB] px-[16px] py-[4px] rounded-[16px] font-semibold">
                        Back
                    </Link>
                    <input
                        className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"
                        onChange={handleImageToggle}
                    />
                </div>
                {pokemon.data && (
                    <div className="  border-gray-700 rounded-[20px] overflow-hidden shadow  m-auto">
                        <div className=" bg-center aspect-square w-full bg-cover rounded-[20px] relative h-[50vh]">
                            <div>
                                <img
                                    className={`absolute h-[auto] max-h-[500px] w-full aspect-square translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] ${imageMode === 1 ? "Front" : "Back"}`}
                                    src="/images/pokemon_bg.png"
                                    alt=""
                                />
                                <img
                                    className={'absolute rounded-t-lg h-[50%] sm:h-[500px] p-[40px] translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] '}
                                    src={imageMode === 1 ? pokemon.data.imageFront : pokemon.data.imageBack}
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className={`py-5 bg-gray-500 rounded-[20px] p-[16px] my-[20px] ${imageMode === 1 ? "Front" : "Back"}`}>
                            <div className="flex justify-between">
                                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    {pokemon.data.name}
                                </h5>
                                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    #{pokemon.data.id}
                                </h5>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[20px] gap-y-[30px]">
                                <div>
                                    <div className="flex gap-x-[10px]">
                                        <div className="text-[#4CAFEB] font-semibold">Height</div>
                                        <div className="text-white">{(pokemon.data.height / 10).toFixed(2)} m.</div>
                                    </div>
                                    <div className="flex gap-x-[10px]">
                                        <div className="text-[#4CAFEB] font-semibold">Weight</div>
                                        <div className="text-white">{(pokemon.data.weight).toFixed(2)} kg.</div>
                                    </div>
                                </div>
                                <div className="flex gap-2 justify-start sm:justify-end mt-[16px]">
                                    {pokemon.data.types.map((item) => {
                                        return (
                                            <span
                                                className={`badge-type-${item.type.name} px-[14px] capitalize py-1 rounded-[16px]`}
                                            >
                                                {item.type.name}
                                            </span>
                                        )
                                    })}
                                </div>
                                <div>
                                    <h5 className="text-white font-semibold">Abilities</h5>
                                    <div className="grid grid-cols-1 gap-[16px] mt-[16px]">
                                        {pokemon.data.abilities.map((item) => {
                                            return <div className="bg-[#4CAFEB] px-[14px] capitalize py-1 rounded-[16px]"
                                            >
                                                {item.ability.name}
                                            </div>
                                        })}
                                    </div>
                                </div>
                                <div>
                                    <h5 className="text-white font-semibold">State</h5>
                                    <div className="grid grid-cols-1 gap-[16px] mt-[16px]">
                                        {pokemon.data.stats.map((item) => {
                                            return <div className="flex gap-x-[10px] justify-between">
                                                <div className="text-[#4CAFEB] font-semibold">{item.stat.name}</div>
                                                <div className="text-white">{(item.base_stat)}</div>
                                            </div>
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div >
    );
};

export default DetailPage;