import { useInfiniteQuery } from "@tanstack/react-query";
import clientAxios from "./clientAxios";





const getPosts = async ({ pageParam = 1 }) => {

    const data = await clientAxios.get("/obtenerPosts?page=" + pageParam);
    
    return data;
}


const useGetPosts = () => {
    return useInfiniteQuery({
        queryKey: ["posts"],
        queryFn: getPosts,
        initialPageParam: 1,
        getNextPageParam: (data) => {

            if (data.data.data.current_page < data.data.data.last_page) {
                return data.data.data.current_page + 1
            } else {
                return undefined;
            }

        }

    })
}

export default useGetPosts;
