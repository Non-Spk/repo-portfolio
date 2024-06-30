import { generationList, typesList, sortList } from '@/utils/optionList'
import { useSearchForm } from './SearchForm.hook'

const SearchForm = () => {
    const { fieldKeyword, fieldGeneration, fieldSort, fieldType } = useSearchForm()
    return (
        <form className='grid grid-cols-4 mt-10 gap-x-[20px] p-[20px]  bg-[#FFFFFF70] rounded-[25px]'>
            <div>
                <label
                    htmlFor="generation"
                    className="block mb-2 text-[24px] font-medium text-white">
                    Generation
                </label>
                <select
                    {...fieldGeneration}
                    id="generation"
                    className=" capitalize bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">

                    {generationList.map((item, index) => {
                        return <option className='capitalize' key={`generation-key-${index}`} value={index} >{item.name}</option>
                    })}
                </select>
            </div>
            <div>
                <label
                    htmlFor="type"
                    className="block mb-2 text-[24px] font-medium text-white">
                    Type
                </label>
                <select
                    {...fieldType}
                    id="type"
                    className=" capitalize bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">

                    {typesList.map((item, index) => {
                        return <option className='capitalize' key={`type-key-${index}`} value={item} >{item}</option>
                    })}
                </select>
            </div>
            <div>
                <label
                    htmlFor="sort"
                    className="block mb-2 text-[24px] font-medium text-white">
                    Sort By
                </label>
                <select
                    {...fieldSort}
                    id="sort"
                    className=" capitalize bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">

                    {sortList.map((item, index) => {
                        return <option className='capitalize' key={`sort-key-${index}`} value={item} >{item}</option>
                    })}
                </select>
            </div>
            <div>
                <label
                    htmlFor="search"
                    className="block mb-2 text-[24px] font-medium text-white">
                    Search
                </label>
                <input
                    {...fieldKeyword}
                    id="search"
                    className=" capitalize bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
            </div>
        </form>
    )
}

export default SearchForm