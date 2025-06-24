import { useEffect, useState } from "react";
export default function useFetchUser(id) {
    const [data, setData] = useState(null);
    useEffect(() => {
        if (!id) return;
        fetch(`/api/user/${id}`)
            .then(res => res.json())
            .then(setData);
    }, [id]);
    return data;
}
