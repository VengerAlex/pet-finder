import {useEffect, useRef, useState} from 'react';

import useInput from "../../hooks/useInput";
import useDebounce from "../../hooks/useDebounce";
import { BiSearch } from 'react-icons/bi';
import { AiOutlineCloseCircle } from 'react-icons/ai';

import "../../styles/header.scss"
import {IPost} from "../../redux/reducers/post/post.interface";
import PostService from "../../services/post/postService";
import FilterItem from "./FilterItem";

const FilterSearch = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [results, setResults] = useState<IPost[]>([]);
    const input = useInput("");
    const debounceValue = useDebounce(input.value, 500);

    const findPosts = async () => {
        const data = await PostService.findPosts(debounceValue);

        setResults(data);
        console.log(data)
    }

    useEffect(() => {
        if (debounceValue === "") return

        findPosts();
    }, [debounceValue])

    const closeHandler = () => {
        setIsOpen(false)
    }

    return (
        <div className="header__search">
            <BiSearch className="header__search-svg"/>
            <input
                onFocus={() => setIsOpen(true)}
                {...input}
                placeholder="Find a friend"
                type="text"/>
            {isOpen &&
                <div className="header__search-container">
                    <div className="close-btn">
                                <span onClick={() => setIsOpen(false)}>
                                    <AiOutlineCloseCircle />
                                </span>
                    </div>
                    {results.length && isOpen
                        ? <>
                            <ul className="search__list">
                            {results.map(postElem => (
                                <FilterItem closeHandler={closeHandler} key={postElem._id} {...postElem}/>
                            ))}
                          </ul>
                        </>
                        : <div className="search__no-result">No results</div>
                    }
                </div>
            }
        </div>
    );
};

export default FilterSearch;