import React from 'react';
import PokemonCard from '@/components/PokemonCard';
import SearchForm from '@/components/SearchForm';
import { usePokemonListStore } from '@/store/pokemonList';
import ReactLoading from 'react-loading';

const HomePage: React.FC = () => {
    const { pokemon, fetchPokemon } = usePokemonListStore();

    return (
        <div className="w-[90%] m-[auto] max-w-[1800px] relative ">
            <div className="flex justify-center">
                <img src="/images/pokedex-3d-logo.png" alt="logo" className="max-h-[80px]" />
            </div>

            <div className="sticky top-0 z-10 ">
                <SearchForm />
            </div>
            <div className='overflow-hidden '>
                {fetchPokemon.loading &&
                    (<div className='h-[800px] flex justify-center items-center'>
                        <ReactLoading type="bars" color="#fff" />
                    </div>)}
                {!fetchPokemon.loading &&
                    (<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-[20px] mt-[40px] '>
                        {pokemon.data?.map((item) => (
                            <PokemonCard
                                id={item.id}
                                name={item.name}
                                imageFront={item.imageFront || ' '}
                                imageBack={item.imageBack || ' '}
                                types={item.types} />
                        ))}
                    </div>)}
            </div>
        </div>
    );
};

export default HomePage;
