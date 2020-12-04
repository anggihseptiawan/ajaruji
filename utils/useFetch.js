const useFecth = async (url, type) => {
    const token = sessionStorage.getItem('token');

    try {
        const req = await fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        });
        const res = await req.json();
        return res; 

    } catch (error) {
        return error;
    }
}

export default useFecth;